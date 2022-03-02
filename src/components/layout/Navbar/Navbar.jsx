import styles from './Navbar.module.css';

import { Logo } from '../../items/Logo/Logo';

export const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Logo></Logo>
        </div>
    );
};
