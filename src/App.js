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
import TodayRecommend from './components/today_recommend/today_recommend';
import Best from "./components/best/best";
import Register from "./components/register/register";
import Footer from "./components/footer/footer";
import StoreMenuBar from "./components/store_menubar/store_menubar";
import StoreBanner from "./components/store_banner/store_banner";
import Keyword from "./components/keyword/keyword";
import Popular from "./components/popular/popular";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import ExpertButtons from "./components/expertButtons/expertButtons";
import ExpertBanner from "./components/expertBanner/expertBanner";
import Calculate from "./components/calculate/calculate";
import ExpertSlide from "./components/expertSlide/expertSlide";
import ExpertReview from "./components/expertReview/expertReview";
import ExpertExample from "./components/expertExample/expertExample";
import ExpertRead from "./components/expertRead/expertRead";
import ExpertService from "./components/expertService/expertService";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          {/* 커뮤니티 페이지 */}
          <Route exact path={["/","/thc","/community"]}>
            <ScrollToTop />
            <MenuBar />
            <Banner />
            <Shortcuts />
            <Story />
            <CategorySlider />
            <Deal />
            <Showcase />
            <InteriorReview />
            <TodayEvent />
            <TodayRecommend />
            <Best />
            <Register />
          </Route>
          {/* 스토어 페이지 */}
          <Route path="/store">
            <ScrollToTop />
            <StoreMenuBar />
            <StoreBanner />
            <Deal />
            <div className={styles.category}>
              <CategorySlider />
            </div>
            <Keyword />
            <Popular />
          </Route>
          {/* 인테리어시공 페이지 */}
          <Route path="/experts">
            <ScrollToTop />
            <MenuBar />
            <ExpertButtons />
            <ExpertBanner />
            <Calculate />
            <ExpertSlide />
            <ExpertReview />
            <ExpertExample />
            <ExpertRead />
            <ExpertService />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
