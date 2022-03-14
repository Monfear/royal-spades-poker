import styles from './ArrowUpIcon.module.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useRef } from 'react';

export const ArrowUpIcon = () => {
    const arrowRef = useRef(null);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div onClick={scrollTop} ref={arrowRef}>
                <AiOutlineArrowUp className={styles.ArrowUpIcon}></AiOutlineArrowUp>
            </div>
        </>
    );
};
