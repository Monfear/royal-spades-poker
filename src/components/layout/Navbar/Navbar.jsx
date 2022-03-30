import styles from './Navbar.module.css';
import { useEffect, useRef, useState } from 'react';

import { Logo } from '../../items/Logo/Logo';
import { Hamburger } from '../../items/Hamburger/Hamburger';
import { Nav } from '../Nav/Nav';

export const Navbar = () => {
    // state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

    // ref
    const navbarRef = useRef(null);

    // effect
    useEffect(() => {
        window.addEventListener('scroll', watchScroll);

        return () => {
            window.removeEventListener('scroll', watchScroll);
        };
    }, []);

    // functions
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const watchScroll = (e) => {
        const windowScrollY = window.scrollY;
        let navbarHeight;

        if (navbarRef.current) {
            navbarHeight = navbarRef.current.offsetHeight;
        }

        if (windowScrollY > navbarHeight) {
            setIsNavbarScrolled(true);
        } else {
            setIsNavbarScrolled(false);
        }
    };

    return (
        <div className={!isNavbarScrolled ? styles.Navbar : `${styles.Navbar} ${styles.scrolled}`} ref={navbarRef}>
            <Logo></Logo>

            <Nav isMobileMenuOpen={isMobileMenuOpen}></Nav>

            <Hamburger isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}></Hamburger>
        </div>
    );
};
