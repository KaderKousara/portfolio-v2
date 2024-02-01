import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
/*import { StandardButton } from "@/components/buttons/StandardButton";
import { DotGrid } from "./DotGrid";*/
import styles from "./hero.module.scss";
import Profile from "@/public/thisone.gif";
import { Button, BUTTON_TYPE_CLASSES } from '@/components/Button/Button';

export const Hero = () => {
    return (
        <section className={`section-wrapper ${styles.hero}`}>
            <div className={styles.heroGrid}>
                <div className={styles.copyWrapper}>
                    <Reveal>
                        <div>

                            <h1 className={styles.title}>
                                Hi,
                                <span className={styles.wavingHand}>👋</span>
                            </h1>
                            <h1 className={styles.title}>
                                I&apos;m AK<span>.</span>
                            </h1>
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className={styles.subTitle}>
                            a <span>Software Developer</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutCopy}>
                            I&apos;ve dedicated 3 years to developing and improving applications for various companies and individuals. Additionally, I enjoy working on creative personal projects during my free time.
                            Let&apos;s connect!
                        </p>
                    </Reveal>
                   <Reveal>
                       <div className={styles.buttonContainer}>
                        <Button
                            onClick={() => document.getElementById("contact")?.scrollIntoView()} className={BUTTON_TYPE_CLASSES.StandardButton}
                        >
                            Contact me
                        </Button>
                       <Button className={BUTTON_TYPE_CLASSES.OutlineButton} onClick={() => window.open("/")}>
                           My Resume
                       </Button>
                       </div>
                    </Reveal>
                </div>
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <Image
                        className={styles.profile}
                        src={Profile}
                        priority
                        alt="John Carlo Devera | Frontend Developer"
                        layout="responsive"
                    />
                </motion.div>
            </div>
           {/* <DotGrid />*/}
        </section>
    );
};
