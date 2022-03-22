import styles from './Heading.module.css';

export const Heading = ({ children, classModifier, styleModifier }) => {
    return (
        <div className={!classModifier ? styles.Heading : `${styles.Heading} ${styles[classModifier]}`} style={styleModifier}>
            <h1 className={styles.Heading__text}>{children}</h1>
        </div>
    );
};
