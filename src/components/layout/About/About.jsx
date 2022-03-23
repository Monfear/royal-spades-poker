import styles from './About.module.css';
import { useEffect, useRef } from 'react';

import { Container } from './../Container/Container';
import { Heading } from './../../items/Heading/Heading';
import { Spade } from './../../items/Spade/Spade';

import { setTextObserver } from '../../../observers/textObserver';

import pokerTable from './../../../assets/img/poker-table.jpg';

export const About = () => {
    const descriptionRef = useRef(null);

    useEffect(() => {
        setTextObserver(descriptionRef.current, styles.show);
    }, []);

    return (
        <section className={styles.About}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={styles.About__waveTop}>
                <path fill='#f8f8f8' fillOpacity='1' d='M0,128L34.3,138.7C68.6,149,137,171,206,202.7C274.3,235,343,277,411,261.3C480,245,549,171,617,149.3C685.7,128,754,160,823,176C891.4,192,960,192,1029,197.3C1097.1,203,1166,213,1234,213.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
            </svg>

            <Container>
                <Heading
                    classModifier={'Heading--light'}
                    styleModifier={{
                        marginTop: '1rem',
                    }}
                >
                    about us
                </Heading>

                <div className={styles.About__content}>
                    <p className={styles.About__content__description} ref={descriptionRef}>
                        If you love playing poker and enjoying the company of great people, then Royal Spades Poker is the only place the go. Our club provides all of our members with an upscale atmosphere that is both safe and comfortable. Royal Spades Poker is a rake-free club that us complete compliance with Chapter 47 of the Texas Penal Code, which ensures we are always in legal standing. Each table is hosted by a professional dealer who understands the Rules of Poker and respects the play of each and every member poker club.
                    </p>

                    <img src={pokerTable} alt='aces' className={styles.About__content__img} />

                    <Spade
                        styleModifier={{
                            gridRow: '2/3',
                            alignSelf: 'start',
                        }}
                    ></Spade>
                </div>
            </Container>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={styles.About__waveBottom}>
                <path fill='#f8f8f8' fillOpacity='1' d='M0,128L34.3,138.7C68.6,149,137,171,206,202.7C274.3,235,343,277,411,261.3C480,245,549,171,617,149.3C685.7,128,754,160,823,176C891.4,192,960,192,1029,197.3C1097.1,203,1166,213,1234,213.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
            </svg>
        </section>
    );
};
