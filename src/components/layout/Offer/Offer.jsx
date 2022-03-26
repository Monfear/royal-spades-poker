import styles from './Offer.module.css';

import { dataCards } from '../../../data/OfferData';

import { Container } from './../Container/Container';
import { Card } from '../../content/Card/Card';
import { Heading } from '../../items/Heading/Heading';

export const Offer = () => {
    return (
        <section className={styles.Offer} id='offer'>
            <Container>
                <Heading>Our offer</Heading>
                <div className={styles.Offer__cards}>
                    {dataCards.map(({ id, title, img, description, icon }) => {
                        return <Card key={id} title={title} description={description} img={img} icon={icon}></Card>;
                    })}
                </div>
            </Container>
        </section>
    );
};
