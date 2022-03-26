import styles from './Gallery.module.css';

import { Container } from './../Container/Container';
import { Heading } from '../../items/Heading/Heading';
import { Carousel } from '../../content/Carousel/Carousel';

export const Gallery = () => {
    return (
        <section className={styles.Gallery} id='gallery'>
            <Container>
                <Heading>Gallery</Heading>
                <Carousel></Carousel>
            </Container>
        </section>
    );
};
