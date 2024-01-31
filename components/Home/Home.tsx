import { Heading } from "@/components/Navigation/Header/header";
import { NavBarMenu } from "@/components/Navigation/Navbar/NavBarMenu"
import styles from "./Home.module.scss"
export const Home = () => {
       return (
           <>
           <div className={styles.home}>
               <NavBarMenu/>
               <main id="main">
                   <Heading/>
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