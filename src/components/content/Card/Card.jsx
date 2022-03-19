import { useEffect, useRef } from 'react';
import styles from './Card.module.css';

export const Card = ({ title, description, img, icon }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.active);

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-100px 0px',
            }
        );

        observer.observe(cardRef.current);
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
