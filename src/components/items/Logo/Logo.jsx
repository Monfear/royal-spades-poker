import styles from './Logo.module.css';
import { GiPokerHand } from 'react-icons/gi';

export const Logo = () => {
    return (
        <div className={styles.Logo}>
            <GiPokerHand className={styles.Logo__icon}></GiPokerHand>
            <span className={styles.Logo__text}>react poker</span>
        </div>
    );
};
