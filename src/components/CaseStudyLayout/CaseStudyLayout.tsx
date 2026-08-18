import Link from "next/link";
import type { CaseStudy, CaseStudyBlock } from "@/data/case-studies";
import { groupCaseStudyBlocks } from "@/data/case-studies";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/get-messages";
import { CaseStudyHero } from "@/components/CaseStudyHero/CaseStudyHero";
import { CaseStudyMedia } from "@/components/CaseStudyMedia/CaseStudyMedia";
import { CaseStudyNav } from "@/components/CaseStudyNav/CaseStudyNav";
import { CaseStudySection } from "@/components/CaseStudySection/CaseStudySection";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./CaseStudyLayout.module.css";

type CaseStudyLayoutProps = {
  locale: Locale;
  messages: Messages;
  study: CaseStudy;
};

function renderBlocks(blocks: CaseStudyBlock[], locale: Locale, groupId: string) {
  let headingAssigned = false;

  return blocks.map((block, index) => {
    if (block.type === "image") {
      return <CaseStudyMedia key={`${groupId}-image-${index}`} locale={locale} block={block} />;
    }

    const headingId =
      !headingAssigned && block.type === "section" ? `${groupId}-title` : undefined;

    if (headingId) {
      headingAssigned = true;
    }

    return (
      <CaseStudySection
        key={`${groupId}-text-${index}`}
        locale={locale}
        block={block}
        headingId={headingId}
      />
    );
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
          <Link className={styles.button} href={`/${locale}`}>
            {messages.caseStudy.backHomeCta}
          </Link>
        </div>
      </div>
    </article>
  );
}
