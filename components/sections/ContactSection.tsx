import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

type ContactSectionProps = {
  id?: string;
  variant?: "band" | "page";
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string;
  showSocials?: boolean;
};

export function ContactSection({
  id,
  variant = "band",
  eyebrow,
  title,
  highlight,
  body,
  showSocials = false,
}: ContactSectionProps) {
  const Heading = variant === "page" ? "h1" : "h2";

  return (
    <section id={id} className={`section contact-${variant}`}>
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <Heading>
            {title}
            {highlight ? <span>{highlight}</span> : null}
          </Heading>
          <p>{body}</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {showSocials ? (
              <>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </>
            ) : null}
          </div>
        </div>
        <div className="form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
