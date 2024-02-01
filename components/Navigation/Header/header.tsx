import { Button, BUTTON_TYPE_CLASSES } from '@/components/Button/Button';
import {HeaderLinks} from '@/components/Navigation/HeaderLinks/HeaderLinks'
import styles from "./header.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <HeaderLinks />

    </header>
  );
};