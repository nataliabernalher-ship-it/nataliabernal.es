import styles from "./SkipLink.module.css";

type SkipLinkProps = {
  label: string;
};

export function SkipLink({ label }: SkipLinkProps) {
  return (
    <a className={styles.skip} href="#content">
      {label}
    </a>
  );
}
