import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./Hero.module.scss";

import { Button, BUTTON_TYPE_CLASSES } from '@/components/Button/Button';

export const Hero = () => {
    return (
        <section className={`section-wrapper ${styles.hero}`}>
            <div className={styles.heroGrid}>
                <div className={styles.copyWrapper}>
                    <Reveal>
                        <h1 className={styles.title}>
                            Hey, I&apos;m Kader<span>.</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className={styles.subTitle}>
                            I&apos;m a <span>Software Developer</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutCopy}>
                            I&apos;ve spent the last 4 years developing and improving web applications for various companies and individuals.
                            I enjoy working on creative personal projects during my free time🎨.
                            Let&apos;s connect!
                        </p>
                    </Reveal>
                    <Reveal>
                        <Button
                            onClick={() => document.getElementById("contact")?.scrollIntoView()} className={BUTTON_TYPE_CLASSES.StandardButton}
                        >
                            Contact me
                        </Button>
                    </Reveal>
                </div>

            </div>
            <DotGrid />
        </section>
    );
};
