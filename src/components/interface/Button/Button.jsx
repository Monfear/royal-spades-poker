import styles from './Button.module.css';

export const Button = ({ children, onClickHandler, styleModifier, classModifier }) => {
    return (
        <>
            <button className={!classModifier ? styles.Button : `${styles.Button} ${styles[classModifier]}`} style={styleModifier} onClick={onClickHandler}>
                {children}
            </button>
        </>
    );
};
