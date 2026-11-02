import Link from "next/link";
import { homeBuildItems } from "@/lib/data";

export function ServiceShowcase() {
  return (
    <div className="build-list-grid">
      {homeBuildItems.map((item) => (
        <article className="build-list-card reveal" key={item.title}>
          <h3>
            <Link href={item.href}>{item.title}</Link>
          </h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
