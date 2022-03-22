import styles from './Spade.module.css';
import spade from './../../../assets/img/spade2.png';

export const Spade = ({ styleModifier }) => {
    return (
        <div className={styles.Spade} style={styleModifier}>
            <img src={spade} alt='poker' className={styles.Spade__img} />
        </div>
    );
};
