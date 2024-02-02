import {SectionHeader} from "@/components/utils/SectionHeader";
import {Project} from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
      title: "LandGriffon",
      imgSrc: "/project-imgs/landgriffon.png",
      code: "https://github.com/Vizzuality/landgriffon",
      projectLink: "https://landgriffon.com/",
      // tech: ["React", "Nextjs", "Sytled Components", "Firebase Auth", "Laravel"],
      tech: ["React", "Nextjs", "TypeScript", "Tailwind", "Nestjs"],
    description:
        "empowers companies to measure, manage, and transform agricultural supply chain impacts using an open scientific methodology. I contribute to the development and enhancement of the platform.",
    modalContent: (
      <>
        <p>
            Worked as a Frontend Engineer and created dynamic reusable components
            that were easily testable and could be shared across projects and Ensured
            that all code is well documented, reusable, efficient, and followed best practices.
            created different types of Charts and Graphs for Data Visualization using Recharts.
            created multiple authentication patterns using NextAuth
        </p>
        <p>
            The tech stack is based on Nextjs with Typescript and Tailwind,
            connected to a Nestjs backend, with data stored in Postgresql.
        </p>
      </>
    ),
  },
  {
      title: "Mangrove Atlas",
    imgSrc: "/project-imgs/mangrove.png",
    code: "https://github.com/Vizzuality/mangrove-atlas",
    projectLink: "https://www.globalmangrovewatch.org/",
    tech: ["React", "Redux", "ReduxSaga", "JavaScript"],
    description:
        "Global Mangrove Watch a platform that provides remote sensing data and tools for monitoring real-time information on where and what changes there are to mangroves across the world",
    modalContent: (
      <>
        <p>
          Worked as a Frontend Engineer Developed features for the platform that provides the remote sensing data and tools. created dynamic reusable components and
          integrating api with react saga and redux,
          created different types of Charts and Graphs for Data Visualization using Recharts.
        </p>
      </>
    ),
  },
  {
    title: "WorshipHIM",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://www.github.com",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US",
    tech: ["React", "React Native", "Styled Components", "Android"],
    description:
      "WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.",
    modalContent: (
      <>
        <p>
          WorshipHIM is a chord and lyrics app developed to help ease everyone
          in their worship to God. So that all may know, from the rising of the
          sun to its setting, That there is none besides God. He is the Lord and
          there&apos;s no other! Praise Him, Worship Him!
        </p>
        <p>This is a very fun project that i made using React Native.</p>
      </>
    ),
  },
  {
    title: "WorshipHIM Landing Page",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://www.github.com",
    projectLink: "https://worshiphim.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Google Play Scrapper", "Ko-Fi"],
    description:
      "Landing Page of WorshipHIM mobile application for showcasing feature rich and tools of the app.",
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
];
