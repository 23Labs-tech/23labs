import Script from "next/script";

export function CalendlyWidget() {
  return (
    <div className="contact-calendly">
      <div className="calendly-inline-widget" data-url="https://calendly.com/23labs/30min" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
