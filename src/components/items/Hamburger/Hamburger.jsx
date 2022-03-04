import styles from './Hamburger.module.css';

export const Hamburger = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <div className={!isMobileMenuOpen ? styles.Hamburger : `${styles.Hamburger} ${styles.active}`} onClick={toggleMobileMenu}>
            <div className={styles.Hamburger__line}></div>
        </div>
    );
};
