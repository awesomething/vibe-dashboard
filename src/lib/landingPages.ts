import type { ComponentType } from "react";
import AwesomethingDemoPage, { meta as awesomethingDemoMeta } from "../landing-pages/awesomething/demo/page";
import NonstopPlumbersPage, { meta as nonstopPlumbersMeta } from "../landing-pages/awesomething/nonstop-plumbers-water-heater-installation/page";
import LandingPage, {meta as petriPlumbingMeta} from "src/landing-pages/longman14/petri-plumbing/page";
import CommonerplacePage, {meta as commonerPlaceMeta} from "src/landing-pages/longman14/commonerplace/page";
// @ts-ignore The imported landing page is a JSX module without a declaration file.
import FrazierPlumbingPage, {meta as frazierMeta} from "src/landing-pages/longman14/frazier-plumbing/page";

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
  {
    meta: nonstopPlumbersMeta,
    Component: NonstopPlumbersPage,
  },
  {
    meta: petriPlumbingMeta,
    Component: LandingPage
  },
  {
    meta: commonerPlaceMeta,
    Component: CommonerplacePage
  },
  {
    meta: frazierMeta,
    Component: FrazierPlumbingPage
  }

];

export function getLandingPage(slug: string): LandingPageDef | undefined {
  return landingPages.find((p) => p.meta.slug === slug);
}
