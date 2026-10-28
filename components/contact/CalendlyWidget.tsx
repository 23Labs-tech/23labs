import Script from "next/script";

export function CalendlyWidget() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/23labs/30min"
        style={{ minWidth: 320, height: 700 }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
