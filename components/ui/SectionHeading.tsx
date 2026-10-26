type SectionHeadingProps = {
  title: string;
  highlight?: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  highlight,
  body,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`sec-head reveal ${align === "center" ? "sec-head-center" : ""}`.trim()}>
      <h2 className="sec-title">
        {title}
        {highlight ? <span className="em">{highlight}</span> : null}
      </h2>
      {body ? <p className="lead">{body}</p> : null}
    </div>
  );
}
