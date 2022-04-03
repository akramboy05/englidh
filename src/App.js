import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top/ScrollToTop";
import Home from "./router/home/Home";
import Admin from "./router/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from './router/Login/Login';
import Courses from './router/Courses/Courses';
import Skills from "./router/skills/Skills"
import Grammar from "./router/Grammar/Grammar"
import Vocabulary from "./router/Vocabulary/Vocabulary"
import Business from "./router/business/Business"
import General from "./router/General/General"
import Ielts from "./router/Ielts/Ielts"
import Community from "./router/community/Community"


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path= "/login" component={Login}/>
            <Route path= "/courses" component={Courses}/>
            <Route path= "/skills" component={Skills}/>
            <Route path= "/grammar" component={Grammar}/>
            <Route path= "/vocabulary" component={Vocabulary}/>
            <Route path= "/business" component={Business}/>
            <Route path= "/general" component={General}/>
            <Route path= "/ielts" component={Ielts}/>
            <Route path= "/Community" component={Community}/>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
