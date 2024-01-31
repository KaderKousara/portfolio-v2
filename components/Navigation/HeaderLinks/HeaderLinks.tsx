import styles from "./Header.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillSkype
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeaderLinks = () => {
  return (
      <div className={styles.links}>
          <motion.span
              initial={{y: -30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.0}}
          >
              <Link href="https://www.linkedin.com/" target="_blank" rel="nofollow">
                  <AiFillLinkedin size="2.4rem"/>
              </Link>
          </motion.span>


          <motion.span
              initial={{y: -30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.0}}
          >
              <Link href="https://join.skype.com/" target="_blank" rel="nofollow">
                  <AiFillSkype size="2.4rem"/>
              </Link>
          </motion.span>

          <motion.span
              initial={{y: -30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.0}}
          >
              <Link href="https://github.com/" target="_blank" rel="nofollow">
                  <AiFillGithub size="2.4rem"/>
              </Link>
          </motion.span>


          <motion.span
              initial={{y: -30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.0}}
          >
              <Link href="https://www.instagram.com/aluckyfin/" target="_blank" rel="nofollow">
                  <AiFillInstagram size="2.4rem"/>
              </Link>
          </motion.span>
      </div>
);
};
