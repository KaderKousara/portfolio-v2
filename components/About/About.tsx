import { HeaderLinks } from "@/components/Navigation/HeaderLinks/HeaderLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./About.module.scss";
import { Stats } from "@/components/AboutStats/Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
    return (
        <section id="about" className="section-wrapper">
            <SectionHeader title="About" dir="l" />
            <div className={styles.about}>
                <div>
                    <Reveal>
                        <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                            Howdy! 🤠  I&apos;m Abdul Kousara.
                            <br/><br/>
                            I have experience working in Backend and Frontend, with a focus on the web development and the React Ecosystem. I&apos;m passionate about creating beautiful, responsive websites that provide a great user experience.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            My skills include HTML, CSS, JavaScript, and various frontend frameworks like React and Vue.js.
                            I&apos;ve also worked with backend technologies like Node.js, Firebase, MongoDB and PHP/Laravel , allowing me to build full-stack applications.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            When I&apos;m not coding, I enjoy digital painting.
                            I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className={styles.aboutText}>
                            I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
                            If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
                            🔗
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className={styles.links}>
                            <div className={styles.linksText}>
                                <span>My links</span>
                                <AiOutlineArrowRight />
                            </div>
                            <HeaderLinks />
                        </div>
                    </Reveal>
                </div>
                <Stats />
            </div>
        </section>
    );
};
