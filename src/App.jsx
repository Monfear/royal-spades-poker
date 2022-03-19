import styles from './App.module.css';

import { Navbar } from './components/layout/Navbar/Navbar';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { Offer } from './components/layout/Offer/Offer';

function App() {
    return (
        <div className={styles.App}>
            <Navbar></Navbar>
            <Header></Header>
            <Offer></Offer>

            <Footer></Footer>
        </div>
    );
}

export default App;
