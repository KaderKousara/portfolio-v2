import { Heading } from "@/components/Navigation/Header/header";
import { NavBarMenu } from "@/components/Navigation/Navbar/NavBarMenu"
import styles from "./Home.module.scss"
import {Hero} from "@/components/Hero/Hero";
import {About} from "@/components/About/About";
export const Home = () => {
       return (
           <>
           <div className={styles.home}>
               <NavBarMenu/>
               <main id="main">
                   <Heading/>
                   <Hero />
                   <About />
                   <div
                       style={{
                           height: "200px",
                           background:
                               "linear-gradient(180deg, var(--background), var(--background-dark))",
                       }}
                   />
               </main>
           </div>
           </>
       );
}