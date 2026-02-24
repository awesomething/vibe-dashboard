import { getLandingPage } from "@/lib/landingPages";
import { notFound } from "next/navigation";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return notFound();

  const Component = page.Component;
  return (
    <main>
      <Component />
    </main>
  );
}

export function generateStaticParams() {
  // Next.js will statically generate each registered page.
  const { landingPages } = require("@/lib/landingPages") as typeof import("@/lib/landingPages");
  return landingPages.map((p) => ({ slug: p.meta.slug }));
}
