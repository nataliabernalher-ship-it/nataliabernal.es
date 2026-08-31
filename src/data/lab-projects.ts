import { caseStudies, type LocalizedString } from "@/data/case-studies";

export type LabProject = {
  slug: string;
  tags: LocalizedString[];
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
  tags: study.tags,
  title: study.title,
  excerpt: study.excerpt,
  cover: study.cover,
  caseStudySlug: study.slug,
}));
