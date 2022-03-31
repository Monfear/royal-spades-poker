import styles from './History.module.css';
import { useEffect } from 'react';

import { Container } from './../../layout/Container/Container';

import { Navbar } from './../../layout/Navbar/Navbar';
import { Footer } from './../../layout/Footer/Footer';
import { Heading } from '../../items/Heading/Heading';

import historyImg from './../../../assets/img/history.jpg';

import { questionsData } from '../../../data/questionsData';
import { Question } from '../../content/Question/Question';

export const History = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <section className={styles.History}>
                <Container>
                    <Heading classModifier='Heading--light'>History</Heading>
                    <p className={styles.History__caption}>Poker's history dates back centuries and is set to keep growing for years to come. No doubt adding more exciting things to poker's already rich history.</p>

                    <img src={historyImg} alt='history' className={styles.History__img} />

                    <div className={styles.History__content}>
                        {questionsData.map((question, idx) => {
                            return <Question key={Math.random() * idx} title={question.question} answer={question.answer}></Question>;
                        })}
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </>
    );
};
