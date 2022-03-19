import styles from './Card.module.css';
import { useEffect, useRef } from 'react';

import { setCardObserver } from '../../../observers/cardObserver';

export const Card = ({ title, description, img, icon }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        setCardObserver(cardRef.current, styles.active);
    }, []);

    return (
        <div className={styles.Card} ref={cardRef}>
            <img src={img} alt='poker playing' className={styles.Card__img} />
            <img src={icon} alt='icon' className={styles.Card__icon} />

            <div className={styles.Card__textContent}>
                <h1 className={styles.Card__textContent__title}>{title}</h1>
                <p className={styles.Card__textContent__description}>{description}</p>
            </div>
        </div>
    );
};
