import type { ComponentType } from "react";
import AwesomethingPage, { meta as awesomethingMeta } from "@/landing-pages/awesomething";

export type LandingPageMeta = {
  slug: string;
  title: string;
  author: {
    name: string;
    github: string;
  };
  tags?: readonly string[];
  description?: string;
};

export type LandingPageDef = {
  meta: LandingPageMeta;
  Component: ComponentType;
};

export const landingPages: LandingPageDef[] = [
  {
    meta: awesomethingMeta,
    Component: AwesomethingPage,
  },
];

export function getLandingPage(slug: string): LandingPageDef | undefined {
  return landingPages.find((p) => p.meta.slug === slug);
}
