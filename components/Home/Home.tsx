import { Heading } from "@/components/Navigation/Header/header";
import { NavBarMenu } from "@/components/Navigation/Navbar/NavBarMenu"
import styles from "./Home.module.scss"
import {Hero} from "@/components/Hero/Hero";
export const Home = () => {
       return (
           <>
           <div className={styles.home}>
               <NavBarMenu/>
               <main id="main">
                   <Heading/>
                   <Hero />
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