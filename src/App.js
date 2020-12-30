import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
    </div>
  );
}

export default App;
