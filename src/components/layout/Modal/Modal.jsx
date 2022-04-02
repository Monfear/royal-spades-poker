import styles from './Modal.module.css';

import ReactDOM from 'react-dom';
import { Button } from '../../interface/Button/Button';
import { useModalContext } from '../../../context/ModalCtx';

const portal = document.getElementById('portal');

export const Modal = () => {
    const modalCtx = useModalContext();

    return (
        <>
            {ReactDOM.createPortal(
                <div className={styles.Modal}>
                    <div className={styles.Modal__content}>
                        <h2 className={styles.Modal__content__text}>Your message has been sent successfully.</h2>
                        <Button onClickHandler={modalCtx.closeModal}>Confirm</Button>
                    </div>
                </div>,
                portal
            )}
        </>
    );
};
