import { CalendlyWidget } from "@/components/contact/CalendlyWidget";

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
  title,
  body,
}: ContactSectionProps) {
  const bodyItems = Array.isArray(body) ? body : [body];
  const sectionClass =
    variant === "page" ? "sec contact-page-section" : "sec sec-alt";

  return (
    <section id={id} className={sectionClass}>
      <div className="wrap">
        <div className="contact-grid reveal">
          <div className="contact-copy">
            <h2 className="sec-title">{title}</h2>
            {bodyItems.map((item) => (
              <p className="lead" key={item}>
                {item}
              </p>
            ))}
          </div>
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
}
