import styles from './Contact.module.css';
import React, { useEffect } from 'react';

import { Navbar } from './../../layout/Navbar/Navbar';
import { Footer } from './../../layout/Footer/Footer';

import { Container } from './../../layout/Container/Container';
import { Heading } from './../../items/Heading/Heading';
import { Form } from '../../content/Form/Form';
import { Modal } from '../../layout/Modal/Modal';
import { useModalContext } from '../../../context/ModalCtx';

export const Contact = () => {
    const modalCtx = useModalContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>

            <section className={styles.Contact}>
                <Container>
                    <Heading>Contact us</Heading>
                    <p className={styles.Contact__caption}>If you have any further questions don't hesitate to contact us.</p>
                    <Form></Form>
                </Container>

                {modalCtx.isModalOpen && <Modal></Modal>}
            </section>

            <Footer></Footer>
        </>
    );
};
