import styles from './Question.module.css';

import { setQuestionObserver } from '../../../observers/questionObserver';
import { useEffect, useRef } from 'react';

export const Question = ({ title, answer }) => {
    const questionRef = useRef();

    useEffect(() => {
        setQuestionObserver(questionRef.current, styles.active);
    }, []);

    return (
        <article className={styles.Question} ref={questionRef}>
            <h2 className={styles.Question__title}>{title}</h2>
            <p className={styles.Question__answer}>{answer} </p>
        </article>
    );
};
