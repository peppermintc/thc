import styles from './App.module.css';
import Header from './components/header/header';
import MenuBar from './components/menuBar/menuBar';
import Banner from './components/banner/banner';
import Shortcuts from './components/shortcuts/shortcuts';
import Story from './components/story/story';
import CategorySlider from './components/category_slider/category_slider';
import Deal from './components/deal/deal';
import Showcase from './components/showcase/showcase';
import InteriorReview from './components/interior_review/interior_review';
import TodayEvent from './components/today_event/today_event';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MenuBar />
      <Banner />
      <Shortcuts />
      <Story />
      <CategorySlider />
      <Deal />
      <Showcase />
      <InteriorReview />
      <TodayEvent />
    </div>
  );
}

export default App;
