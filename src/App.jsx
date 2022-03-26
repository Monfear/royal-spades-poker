import styles from './App.module.css';

import { Navbar } from './components/layout/Navbar/Navbar';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Offer } from './components/layout/Offer/Offer';
import { About } from './components/layout/About/About';
import { Gallery } from './components/layout/Gallery/Gallery';

function App() {
    return (
        <div className={styles.App}>
            <Navbar></Navbar>
            <Header></Header>
            <Offer></Offer>
            <About></About>
            <Gallery></Gallery>

            <Footer></Footer>
        </div>
    );
}

export default App;
