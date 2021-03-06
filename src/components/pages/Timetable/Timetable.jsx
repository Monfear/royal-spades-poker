import styles from './Timetable.module.css';
import React, { useEffect } from 'react';

import { Container } from '../../layout/Container/Container';

import { Navbar } from './../../layout/Navbar/Navbar';
import { Footer } from './../../layout/Footer/Footer';
import { Heading } from '../../items/Heading/Heading';
import { tournamentsInfo } from '../../../data/tournamentsInfo';

export const Timetable = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>

            <section className={styles.Timetable}>
                <Container>
                    <Heading classModifier={'Heading--light'}>Daily tournaments</Heading>
                    <p className={styles.Timetable__caption}>Our club offers exciting games every day among fantastic players and professional dealers.</p>

                    <div className={styles.Timetable__table}>
                        {tournamentsInfo.map((item, idx) => {
                            return (
                                <div className={styles.Timetable__table__row} key={Math.random() * idx}>
                                    <div className={styles.Timetable__table__row__icon}>{item.icon}</div>
                                    <div className={styles.Timetable__table__row__name}>{item.name}</div>
                                    <div className={styles.Timetable__table__row__day}>{item.day}</div>
                                    <div className={styles.Timetable__table__row__time}>{item.time}</div>
                                    <div className={styles.Timetable__table__row__entry}>{item.entry}</div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <Footer></Footer>
        </>
    );
};
