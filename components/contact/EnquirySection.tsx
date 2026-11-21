import { ContactForm } from "@/components/contact/ContactForm";

export function EnquirySection({ defaultService = "" }: { defaultService?: string }) {
  return (
    <section className="sec no-top" id="enquiry">
      <div className="container narrow">
        <div className="sec-head sec-head-center reveal">
          <span className="mono">Send an enquiry</span>
          <h2 className="sec-title">Tell us what you&apos;re working on</h2>
          <p className="lead">
            Prefer writing it down? Fill this in and we&apos;ll reply within one business day. If you&apos;d
            rather talk it through live, book a time below instead.
          </p>
        </div>
        <ContactForm defaultService={defaultService} />
      </div>
    </section>
  );
}
