import Link from "next/link";
import type { CaseStudy, CaseStudyBlock } from "@/data/case-studies";
import { groupCaseStudyBlocks } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import { CaseStudyCards } from "@/components/CaseStudyCards/CaseStudyCards";
import { CaseStudyFeature } from "@/components/CaseStudyFeature/CaseStudyFeature";
import { CaseStudyHero } from "@/components/CaseStudyHero/CaseStudyHero";
import { CaseStudyImagePair } from "@/components/CaseStudyImagePair/CaseStudyImagePair";
import { CaseStudyMedia } from "@/components/CaseStudyMedia/CaseStudyMedia";
import { CaseStudyNav } from "@/components/CaseStudyNav/CaseStudyNav";
import { CaseStudyQuote } from "@/components/CaseStudyQuote/CaseStudyQuote";
import { CaseStudySection } from "@/components/CaseStudySection/CaseStudySection";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./CaseStudyLayout.module.css";

type CaseStudyLayoutProps = {
  locale: Locale;
  messages: Messages;
  study: CaseStudy;
};

function renderBlock(block: CaseStudyBlock, locale: Locale, key: string, headingId?: string) {
  switch (block.type) {
    case "image":
      return <CaseStudyMedia key={key} locale={locale} block={block} />;
    case "quote":
      return <CaseStudyQuote key={key} locale={locale} block={block} />;
    case "cards":
      return <CaseStudyCards key={key} locale={locale} block={block} />;
    case "feature":
      return <CaseStudyFeature key={key} locale={locale} block={block} />;
    case "image-pair":
      return <CaseStudyImagePair key={key} locale={locale} block={block} />;
    default:
      return (
        <CaseStudySection key={key} locale={locale} block={block} headingId={headingId} />
      );
  }
}

function renderBlocks(blocks: CaseStudyBlock[], locale: Locale, groupId: string) {
  let headingAssigned = false;

  return blocks.map((block, index) => {
    const key = `${groupId}-${block.type}-${index}`;
    const isSpyHeading = block.type === "section" && (block.level ?? 2) === 2;
    const headingId = isSpyHeading && !headingAssigned ? `${groupId}-title` : undefined;

    if (headingId) {
      headingAssigned = true;
    }

    return renderBlock(block, locale, key, headingId);
  });
}

export function CaseStudyLayout({ locale, messages, study }: CaseStudyLayoutProps) {
  const groups = groupCaseStudyBlocks(study.blocks);

  return (
    <article className={styles.page}>
      <CaseStudyNav
        locale={locale}
        label={messages.caseStudy.navLabel}
        backLabel={messages.caseStudy.back}
        items={study.nav}
      />
      <div className={styles.column}>
        <CaseStudyHero locale={locale} messages={messages} study={study} />
        {groups.map((group, index) => (
          <Reveal key={group.id} delay={Math.min(index * 40, 160)}>
            <section
              id={group.id}
              className={styles.group}
              aria-labelledby={`${group.id}-title`}
            >
              {renderBlocks(group.blocks, locale, group.id)}
            </section>
          </Reveal>
        ))}
        <div className={styles.cta}>
          <Link className={styles.button} href={`/${locale}/lab`}>
            {messages.caseStudy.backHomeCta}
          </Link>
        </div>
      </div>
    </article>
  );
}
