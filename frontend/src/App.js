import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardBoardScreen from './screens/CardBoardScreen';
import AboutScreen from './screens/AboutScreen';
import ForumScreen from './screens/ForumScreen';
import BoardScreen from './screens/BoardScreen';
import TopicScreen from './screens/TopicScreen';
import NewsScreen from './screens/NewsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import styles from './App.scss';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.container}>
        <Route path='/cardboard' component={CardBoardScreen} />
        <Route path='/news' component={NewsScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/forum' component={ForumScreen} />
        <Route path='/board' component={BoardScreen} />
        <Route path='/topic' component={TopicScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/' exact component={HomeScreen} />
      </div>

      <Contact />
    </Router>
  );
}

export default App;
