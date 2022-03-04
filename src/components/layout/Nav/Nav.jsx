import styles from './Nav.module.css';

import { NavLink } from 'react-router-dom';

export const Nav = ({ isMobileMenuOpen }) => {
    const setActiveLinkStyles = ({ isActive }) => {
        if (isActive) {
            const activeLinkStyles = {};

            return activeLinkStyles;
        }
    };

    return (
        <nav className={!isMobileMenuOpen ? styles.Nav : `${styles.Nav} ${styles.active}`}>
            <ul className={styles.Nav__items}>
                <li className={styles.Nav__items__item}>
                    <NavLink to='/' className={styles.Nav__items__item__link} style={setActiveLinkStyles}>
                        route 1
                    </NavLink>
                </li>

                <li className={styles.Nav__items__item}>
                    <NavLink to='/' className={styles.Nav__items__item__link} style={setActiveLinkStyles}>
                        route 2
                    </NavLink>
                </li>

                <li className={styles.Nav__items__item}>
                    <NavLink to='/' className={styles.Nav__items__item__link} style={setActiveLinkStyles}>
                        route 3
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
