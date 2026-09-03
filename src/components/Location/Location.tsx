import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import type { Messages } from "@/i18n/get-messages";
import styles from "./Location.module.css";

type LocationProps = {
  messages: Messages;
};

export function Location({ messages }: LocationProps) {
  const copy = messages.home.location;

  return (
    <section className={styles.section} aria-labelledby="location-heading">
      <Reveal>
        <div className={styles.inner}>
          <p id="location-heading" className={styles.text}>
            <span aria-hidden="true">{copy.text}</span>
            <span className="srOnly">{copy.sr}</span>
          </p>
          <span className={styles.stamp} aria-hidden="true">
            <span className={styles.stampInner}>
              <Image
                src="/images/location/stamp.png"
                alt=""
                width={128}
                height={89}
                className={styles.stampImg}
                unoptimized
              />
            </span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
