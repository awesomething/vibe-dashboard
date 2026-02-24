import type { ComponentType } from "react";
import AwesomethingDemoPage, {
  meta as awesomethingDemoMeta,
} from "@/landing-pages/awesomething/demo/page";

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
    meta: awesomethingDemoMeta,
    Component: AwesomethingDemoPage,
  },
];

export function getLandingPage(slug: string): LandingPageDef | undefined {
  return landingPages.find((p) => p.meta.slug === slug);
}
