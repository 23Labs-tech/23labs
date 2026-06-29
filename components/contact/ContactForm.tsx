"use client";

import { cloneElement, useRef, useState } from "react";
import type { ContactErrors, ContactPayload } from "@/lib/contact";
import { validateContactPayload } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const emptyForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

type FormState = typeof emptyForm;
type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const startedAtRef = useRef<number | undefined>(undefined);

  const markStarted = () => {
    startedAtRef.current ??= Date.now();
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

      setForm(emptyForm);
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
        <Field label="Full name" id="fullName" error={errors.fullName} required>
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
        <Field label="Company name" id="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your business"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="form-row">
        <Field label="Email address" id="email" error={errors.email} required>
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
        <Field label="Phone number" id="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="04xx xxx xxx"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="How can we help?" id="message" error={errors.message} className="form-full">
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
            `Something went wrong sending your enquiry. Please email ${siteConfig.email} directly.`}
        </div>
      ) : null}

      <button className="btn btn-primary form-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
        <span className="btn-arrow" aria-hidden="true">
          {"\u2192"}
        </span>
      </button>
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
    React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>
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
