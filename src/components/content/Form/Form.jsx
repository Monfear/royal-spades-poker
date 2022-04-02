import styles from './Form.module.css';
import { useState } from 'react';
import { useModalContext } from '../../../context/ModalCtx';

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    // modal ctx
    const modalCtx = useModalContext();

    const checkForm = (e) => {
        e.preventDefault();

        setIsFormSubmitted(false);
        setIsFormValid(false);

        setIsFormSubmitted(true);

        if (name.length > 3 && validateEmail(email) && message.length > 5) {
            setErrorMessage('');
            setName('');
            setEmail('');
            setMessage('');

            setIsFormValid(true);
            modalCtx.openModal();
        } else {
            setErrorMessage('Please enter all fields correctly.');
        }
    };

    const setNameHandler = (e) => {
        setName(e.target.value);
    };

    const setEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const setMessageHandler = (e) => {
        setMessage(e.target.value);
    };

    const validateEmail = (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(value);
    };

    return (
        <form className={styles.Form} onSubmit={checkForm}>
            <div className={styles.Form__item}>
                <label htmlFor='name' className={styles.Form__item__label}>
                    Enter your name
                </label>
                <input type='text' className={styles.Form__item__input} id='name' onChange={setNameHandler} value={name} />
                <span className={styles.Form__item__placeholder}>name</span>
            </div>

            <div className={styles.Form__item}>
                <label htmlFor='email' className={styles.Form__item__label}>
                    Enter your email
                </label>
                <input type='text' className={styles.Form__item__input} id='email' onChange={setEmailHandler} value={email} />
                <span className={styles.Form__item__placeholder}>email</span>
            </div>

            <div className={styles.Form__item}>
                <label htmlFor='message' className={styles.Form__item__label}>
                    Write your message
                </label>
                <textarea className={styles.Form__item__input} id='message' onChange={setMessageHandler} value={message} />
                <span className={styles.Form__item__placeholder}>message</span>
            </div>

            {isFormSubmitted && !isFormValid && <p className={styles.Form__error}>{errorMessage}</p>}

            <button className={styles.Form__btn}>send message</button>
        </form>
    );
};
