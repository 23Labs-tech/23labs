import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  tone?: "dark" | "light";
  priority?: boolean;
  className?: string;
};

export function Logo({ href = "/", tone = "dark", priority = false, className }: LogoProps) {
  const width = tone === "light" ? 104 : 149;
  const height = tone === "light" ? 92 : 132;
  const wrapperClass = className ?? (tone === "light" ? "foot-logo" : "logo");
  const image = (
    <Image
      src={tone === "light" ? "/23labs-logo-light.png" : "/23labs-logo-dark.png"}
      alt="23Labs"
      width={width}
      height={height}
      priority={priority}
      className="logo-image"
    />
  );

  if (!href) return <span className={wrapperClass}>{image}</span>;

  return (
    <Link href={href} className={wrapperClass} aria-label="23Labs home">
      {image}
    </Link>
  );
}
