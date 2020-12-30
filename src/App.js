import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';
import Banner from './components/banner/banner';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
      <Banner />
    </div>
  );
}

export default App;
