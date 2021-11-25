import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Course from './Pages/Course';
import Teacher from './Pages/Teacher';
import Review from './Pages/Review';
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/course" exact>
            <Course/>
          </Route>
          <Route path="/teacher" exact>
            <Teacher/>
          </Route>
          <Route path="/review" exact>
            <Review/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
