type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  body,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`sec-head reveal ${align === "center" ? "sec-head-center" : ""}`.trim()}>
      {eyebrow ? <div className="sec-tag">{eyebrow}</div> : null}
      <h2 className="sec-title">
        {title}
        {highlight ? <span className="em">{highlight}</span> : null}
      </h2>
      {body ? <p className="lead">{body}</p> : null}
    </div>
  );
}
