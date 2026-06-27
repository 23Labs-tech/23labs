import { ContactForm } from "@/components/contact/ContactForm";

type ContactSectionProps = {
  id?: string;
  variant?: "band" | "page";
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string | string[];
  showSocials?: boolean;
};

export function ContactSection({
  id,
  variant = "band",
  eyebrow,
  title,
  body,
}: ContactSectionProps) {
  const bodyItems = Array.isArray(body) ? body : [body];
  const sectionClass = variant === "page" ? "sec contact-page-section" : "sec";

  return (
    <section id={id} className={sectionClass}>
      <div className="wrap">
        <div className="contact-grid reveal">
          <div className="contact-copy">
            <div className="sec-tag">{eyebrow}</div>
            <h2 className="sec-title">{title}</h2>
            {bodyItems.map((item) => (
              <p className="lead" key={item}>
                {item}
              </p>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
