import styles from './Footer.module.css';

import { MdLocationPin } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

import { Logo } from './../../items/Logo/Logo';
import { ArrowUpIcon } from '../../items/ArrowUpIcon/ArrowUpIcon';
import { Button } from './../../interface/Button/Button';

export const Footer = () => {
    const submitForm = (e) => {
        e.preventDefault();
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
                    <p className={styles.Footer__links__link}>Home</p>
                    <p className={styles.Footer__links__link}>Section</p>
                    <p className={styles.Footer__links__link}>Section</p>
                    <p className={styles.Footer__links__link}>Section</p>
                    <p className={styles.Footer__links__link}>Section</p>
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
                    <form className={styles.Footer__newsletter__form}>
                        <input type='email' placeholder='Enter email adress' className={styles.Footer__newsletter__form__input} />
                        <Button
                            styleModifier={{
                                width: '30%',
                                height: '100%',
                                fontSize: 'var(--text-medium)',
                            }}
                            onClickHandler={submitForm}
                        >
                            submit
                        </Button>
                    </form>
                </div>
            </div>

            <div className={styles.Footer__bottom}>
                <p className={styles.Footer__bottom__text}>Copyright 2022 &copy; Royal Spades Poker. All rights reserved.</p>
            </div>
        </footer>
    );
};
