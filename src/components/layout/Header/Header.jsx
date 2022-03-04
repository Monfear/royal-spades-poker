import styles from './Header.module.css';
import pokerCards from './../../../assets/video/poker-cards.mp4';

import { Container } from './../Container/Container';
import { Button } from '../../interface/Button/Button';

export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Header__background}>
                <video src={pokerCards} className={styles.Header__background__video} muted autoPlay loop></video>
                <div className={styles.Header__background__cover}></div>
            </div>

            <Container>
                <div className={styles.Header__content}>
                    <h1 className={styles.Header__content__heading}>join our elite royal spades poker club</h1>
                    <h2 className={styles.Header__content__subheading}>free vip access</h2>
                    <p className={styles.Header__content__caption}>Royal Spades Poker club provides all of our members with an upscale atmosphere that is both safe and comfortable.</p>

                    <Button
                        styleModifier={{
                            marginTop: '4rem',
                        }}
                    >
                        find out more
                    </Button>
                </div>
            </Container>
        </header>
    );
};
