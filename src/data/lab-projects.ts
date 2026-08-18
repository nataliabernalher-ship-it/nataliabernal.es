import { caseStudies, type LocalizedString } from "@/data/case-studies";

export type LabProject = {
  slug: string;
  tag: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  cover: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedString;
  };
  caseStudySlug?: string;
};

export const labProjects: LabProject[] = caseStudies.map((study) => ({
  slug: study.slug,
  tag: study.tag,
  title: study.title,
  excerpt: study.excerpt,
  cover: study.cover,
  caseStudySlug: study.slug,
}));
