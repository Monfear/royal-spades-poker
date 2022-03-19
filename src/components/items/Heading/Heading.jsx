import styles from './Heading.module.css';

export const Heading = ({ children }) => {
    return (
        <div className={styles.Heading}>
            <h1 className={styles.Heading__text}>{children}</h1>
        </div>
    );
};
