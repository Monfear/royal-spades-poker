import styles from './Logo.module.css';
import { GiPokerHand } from 'react-icons/gi';

export const Logo = ({ classModifier }) => {
    return (
        <div className={!classModifier ? styles.Logo : `${styles.Logo} ${styles[classModifier]}`}>
            <GiPokerHand className={styles.Logo__icon}></GiPokerHand>
            <span className={styles.Logo__text}>royal spades poker</span>
        </div>
    );
};
