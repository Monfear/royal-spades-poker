import styles from './Nav.module.css';

import { NavLink } from 'react-router-dom';

export const Nav = ({ isMobileMenuOpen }) => {
    const setActiveLinkClass = ({ isActive }) => {
        if (isActive) {
            return `${styles.Nav__items__item__link} ${styles.active}`;
        } else {
            return styles.Nav__items__item__link;
        }
    };

    return (
        <nav className={!isMobileMenuOpen ? styles.Nav : `${styles.Nav} ${styles.active}`}>
            <ul className={styles.Nav__items}>
                <li className={styles.Nav__items__item}>
                    <NavLink to='/' className={setActiveLinkClass}>
                        home
                    </NavLink>
                </li>

                <li className={styles.Nav__items__item}>
                    <NavLink to='/timetable' className={setActiveLinkClass}>
                        timetable
                    </NavLink>
                </li>

                <li className={styles.Nav__items__item}>
                    <NavLink to='/history' className={setActiveLinkClass}>
                        history
                    </NavLink>
                </li>

                <li className={styles.Nav__items__item}>
                    <NavLink to='/contact' className={setActiveLinkClass}>
                        contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
