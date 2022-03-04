import styles from './App.module.css';

import { Navbar } from './components/layout/Navbar/Navbar';
import { Header } from './components/layout/Header/Header';

function App() {
    return (
        <div className={styles.App}>
            <Navbar></Navbar>

            <Header></Header>
        </div>
    );
}

export default App;
