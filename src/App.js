import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';
import Banner from './components/banner/banner';
import Shortcuts from './components/shortcuts/shortcuts';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
      <Banner />
      <Shortcuts />
    </div>
  );
}

export default App;
