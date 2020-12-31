import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';
import Banner from './components/banner/banner';
import Shortcuts from './components/shortcuts/shortcuts';
import Story from './components/story/story';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
      <Banner />
      <Shortcuts />
      <Story />
    </div>
  );
}

export default App;
