"use client";

import Link from "next/link";
import { cloneElement, useRef, useState } from "react";
import { CONTACT_SERVICE_OPTIONS, validateContactPayload, type ContactErrors, type ContactPayload } from "@/lib/contact";
import { trackFormStart, trackGenerateLead, trackLeadSubmit } from "@/lib/analytics";

const FORM_ID = "enquiry";

function emptyForm(defaultService: string) {
  return {
    fullName: "",
    business: "",
    email: "",
    service: defaultService,
    message: "",
    website: "",
  };
}

type FormState = ReturnType<typeof emptyForm>;
type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const initialService = CONTACT_SERVICE_OPTIONS.some((option) => option.slug === defaultService)
    ? defaultService
    : "";
  const [form, setForm] = useState<FormState>(emptyForm(initialService));
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const startedAtRef = useRef<number | undefined>(undefined);

  const markStarted = () => {
    if (startedAtRef.current === undefined) {
      startedAtRef.current = Date.now();
      trackFormStart(FORM_ID);
    }
  };

  const updateField = (name: keyof FormState, value: string) => {
    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name] && !current.form) return current;
      const next = { ...current };
      delete next[name];
      delete next.form;
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerMessage("");

    const payload: ContactPayload = { ...form, startedAt: startedAtRef.current };
    const validation = validateContactPayload(payload);

    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 422 && data.errors) {
          setErrors(data.errors as ContactErrors);
          setStatus("idle");
          return;
        }
        throw new Error(data.error || "Your enquiry could not be sent.");
      }

      if (!validation.spam) {
        trackGenerateLead();
        trackLeadSubmit(FORM_ID, { service: validation.data.service });
      }

      setForm(emptyForm(initialService));
      setErrors({});
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your enquiry. Please try again."
      );
    }
  };

  return (
    <form
      action="/api/contact"
      className="contact-form"
      method="post"
      onSubmit={handleSubmit}
      onFocusCapture={markStarted}
      onPointerDownCapture={markStarted}
      aria-busy={status === "loading"}
      noValidate
    >
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="form-row">
        <Field label="Name" id="fullName" error={errors.fullName} required>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Jane Smith"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Business name" id="business" error={errors.business} required>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="Your business"
            value={form.business}
            onChange={(event) => updateField("business", event.target.value)}
            autoComplete="organization"
            required
          />
        </Field>
      </div>

      <div className="form-row">
        <Field label="Work email" id="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@business.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            autoComplete="email"
            required
          />
        </Field>
        <Field label="Service" id="service" error={errors.service} required>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            required
          >
            <option value="" disabled>
              Choose an option
            </option>
            {CONTACT_SERVICE_OPTIONS.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="What are you trying to improve?"
        id="message"
        error={errors.message}
        className="form-full"
      >
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a bit about what you're looking to solve."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={4}
          required
        />
      </Field>

      {errors.form ? (
        <div className="form-status form-status-error" role="alert">
          {errors.form}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-status form-status-error" role="alert">
          {serverMessage ||
            "Something went wrong sending your enquiry. Please try again, or book a time with us instead."}
        </div>
      ) : null}

      <button className="btn btn-primary form-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
      <Link className="form-privacy" href="/privacy-policy">
        See our Privacy Policy
      </Link>
      <div
        className={`form-success${status === "success" ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        <strong>Message sent.</strong>
        <span>Thanks, we&apos;ll be in touch within one business day.</span>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  required = false,
  className,
  children,
}: {
  label: string;
  id: keyof FormState;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactElement<
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
    | React.SelectHTMLAttributes<HTMLSelectElement>
  >;
}) {
  const child = cloneElement(children, {
    className: error ? "is-invalid" : undefined,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
  });

  return (
    <label className={className} htmlFor={id}>
      <span className="label-text">
        {label}
        {required ? <span className="req" aria-hidden="true">*</span> : null}
      </span>
      {child}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </label>
  );
}
