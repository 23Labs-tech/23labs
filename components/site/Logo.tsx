import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  tone?: "dark" | "light";
  priority?: boolean;
};

export function Logo({ href = "/", tone = "dark", priority = false }: LogoProps) {
  const image = (
    <Image
      src={tone === "light" ? "/23labs-logo-light.png" : "/23labs-logo-dark.png"}
      alt="23Labs"
      width={134}
      height={120}
      priority={priority}
      className="logo-image"
    />
  );

  if (!href) return <span className="logo">{image}</span>;

  return (
    <Link href={href} className="logo" aria-label="23Labs home">
      {image}
    </Link>
  );
}

