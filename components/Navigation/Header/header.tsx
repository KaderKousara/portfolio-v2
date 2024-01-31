import { OutlineButton } from '@/components/OutlineButton/OutlineButton';
import {HeaderLinks} from '@/components/Navigation/HeaderLinks/HeaderLinks'
import styles from "./header.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <HeaderLinks />
      <OutlineButton onClick={() => window.open("/")}>
          My Resume
        </OutlineButton>
    </header>
  );
};