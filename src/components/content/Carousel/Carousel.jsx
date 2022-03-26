import styles from './Carousel.module.css';
import { useEffect, useRef, useState } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { galleryImgs } from '../../../data/galleryImgs';

export const Carousel = () => {
    const [itemIdx, setItemIdx] = useState(0);
    const [sliderTranslate, setSliderTranslate] = useState(0);

    const sliderContainerRef = useRef(null);
    const dotsRef = useRef(null);

    let intervalRef = useRef(null);

    useEffect(() => {
        setSliderContainerWidth();

        intervalRef.current = setInterval(() => {
            setItemIdx((prev) => prev + 1);
        }, 3000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        clearInterval(intervalRef.current);

        const sliderElement = sliderContainerRef.current;
        const sliderItemWidth = sliderElement.children[0].offsetWidth;

        const dotsElement = dotsRef.current;

        if (dotsElement.children[itemIdx]) {
            dotsElement.children[itemIdx].classList.add(styles.active);
        }

        if (itemIdx >= sliderElement.children.length) {
            setItemIdx(0);
        }

        if (itemIdx < 0) {
            setItemIdx(sliderElement.children.length - 1);
        }

        setSliderTranslate(`-${sliderItemWidth * itemIdx}px`);

        sliderElement.style.transform = `translateX(${sliderTranslate})`;

        intervalRef.current = setInterval(() => {
            setItemIdx((prev) => prev + 1);
        }, 3000);
    }, [itemIdx, sliderTranslate]);

    const setSliderContainerWidth = () => {
        const containerLength = sliderContainerRef.current.children.length;
        sliderContainerRef.current.style.width = containerLength * 100 + '%';
    };

    const increaseIdx = () => {
        setItemIdx((prev) => prev + 1);
    };

    const decreaseIdx = () => {
        setItemIdx((prev) => prev - 1);
    };

    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel__controls}>
                <button className={styles.Carousel__controls__btn} onClick={decreaseIdx}>
                    <AiOutlineArrowLeft></AiOutlineArrowLeft>
                </button>

                <button className={styles.Carousel__controls__btn} onClick={increaseIdx}>
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                </button>
            </div>

            <div className={styles.Carousel__dots} ref={dotsRef}>
                {galleryImgs.map((img, idx) => {
                    return <div className={styles.Carousel__dots__dot} key={Math.random() + idx} onClick={() => setItemIdx(idx)}></div>;
                })}
            </div>

            <div className={styles.Carousel__items} ref={sliderContainerRef}>
                {galleryImgs.map((img, idx) => {
                    return (
                        <div className={styles.Carousel__items__item} key={Math.random() + idx}>
                            <img src={img} alt='gallery' className={styles.Carousel__items__item__img} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
