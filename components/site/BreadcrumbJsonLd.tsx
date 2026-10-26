import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbList } from "@/lib/schema";

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        ...breadcrumbList(items),
      }}
    />
  );
}
