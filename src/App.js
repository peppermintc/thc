import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';
import Banner from './components/banner/banner';
import Shortcuts from './components/shortcuts/shortcuts';
import Story from './components/story/story';
import CategorySlider from './components/category_slider/category_slider';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
      <Banner />
      <Shortcuts />
      <Story />
      <CategorySlider />
    </div>
  );
}

export default App;
