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
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>
        {title}
        {highlight ? <span>{highlight}</span> : null}
      </h2>
      {body ? <p className="section-heading-body">{body}</p> : null}
    </div>
  );
}

