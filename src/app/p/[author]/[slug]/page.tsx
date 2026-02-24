import { landingPages } from "@/lib/landingPages";
import { notFound } from "next/navigation";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ author: string; slug: string }>;
}) {
  const { author, slug } = await params;

  const page = landingPages.find(
    (p) => p.meta.author.github === author && p.meta.slug === slug,
  );
  if (!page) return notFound();

  const Component = page.Component;
  return (
    <main>
      <Component />
    </main>
  );
}

export function generateStaticParams() {
  return landingPages.map((p) => ({
    author: p.meta.author.github,
    slug: p.meta.slug,
  }));
}
