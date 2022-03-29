import styles from './Footer.module.css';
import { useState } from 'react';

import { Link } from 'react-scroll';

import { MdLocationPin } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

import { Logo } from './../../items/Logo/Logo';
import { ArrowUpIcon } from '../../items/ArrowUpIcon/ArrowUpIcon';
import { Button } from './../../interface/Button/Button';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);

        validateEmail();
    };

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(email)) {
            setIsFormValid(true);
            setEmail('');
        } else {
            setIsFormValid(false);
        }
    };

    const setEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__bar}>
                <Logo classModifier={'blue'}></Logo>
                <ArrowUpIcon></ArrowUpIcon>
            </div>

            <div className={styles.Footer__Content}>
                <div className={styles.Footer__links}>
                    <h2 className={styles.Footer__Heading}>navigation</h2>
                    <Link to='home' offset={0} smooth={true} duration={500} className={styles.Footer__links__link}>
                        Home
                    </Link>
                    <Link to='offer' offset={-50} smooth={true} duration={500} className={styles.Footer__links__link}>
                        Our offer
                    </Link>
                    <Link to='about' offset={70} smooth={true} duration={500} className={styles.Footer__links__link}>
                        About us
                    </Link>
                    <Link to='gallery' offset={-100} smooth={true} duration={500} className={styles.Footer__links__link}>
                        Gallery
                    </Link>
                </div>

                <div className={styles.Footer__contact}>
                    <h2 className={styles.Footer__Heading}>contact</h2>
                    <div className={styles.Footer__contact__item}>
                        <MdLocationPin className={styles.Footer__contact__item__icon}></MdLocationPin>
                        <p className={styles.Footer__contact__item__text}>4553 N Loop 1604 San</p>
                    </div>
                    <div className={styles.Footer__contact__item}>
                        <FaMobileAlt className={styles.Footer__contact__item__icon}></FaMobileAlt>
                        <p className={styles.Footer__contact__item__text}>(270) - 543 - 9856</p>
                    </div>
                    <div className={styles.Footer__contact__item}>
                        <GrMail className={styles.Footer__contact__item__icon}></GrMail>
                        <p className={styles.Footer__contact__item__text}>royalspades@poker.com</p>
                    </div>

                    <div className={styles.Footer__contact__socials}>
                        <AiOutlineInstagram className={styles.Footer__contact__socials__icon}></AiOutlineInstagram>
                        <AiOutlineFacebook className={styles.Footer__contact__socials__icon}></AiOutlineFacebook>
                        <AiOutlineLinkedin className={styles.Footer__contact__socials__icon}></AiOutlineLinkedin>
                    </div>
                </div>

                <div className={styles.Footer__newsletter}>
                    <h2 className={styles.Footer__Heading}>subscribe newsletter</h2>
                    <p className={styles.Footer__newsletter__caption}>subscribe to receive company updates and news.</p>
                    <form className={styles.Footer__newsletter__form} onSubmit={submitForm}>
                        <input type='text' placeholder='Enter email adress' className={styles.Footer__newsletter__form__input} onChange={setEmailHandler} value={email} />
                        <Button
                            styleModifier={{
                                width: '30%',
                                height: '100%',
                                fontSize: 'var(--text-medium)',
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                    {!isFormValid && isFormSubmitted && <p className={styles.Footer__newsletter__error}>Please enter correct email adress.</p>}
                    {isFormValid && isFormSubmitted && <p className={styles.Footer__newsletter__success}>Your email address has been added successfully.</p>}
                </div>
            </div>

            <div className={styles.Footer__bottom}>
                <p className={styles.Footer__bottom__copy}>Copyright 2022 &copy; Royal Spades Poker. All rights reserved.</p>
            </div>
        </footer>
    );
};
