import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top/ScrollToTop";
import Home from "./router/home/Home";
import Admin from "./router/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from './router/Login/Login';
// import Schools from './router/schools/Schools';
import Skills from "./router/skills/Skills"
import Grammar from "./router/Grammar/Grammar"
import Vocabulary from "./router/Vocabulary/Vocabulary"
import Business from "./router/business/Business"
import General from "./router/General/General"
import Ielts from "./router/Ielts/Ielts"
import Community from "./router/community/Community"
import Schools from './router/schools/Schools';
import Loader from './components/loader/Loader';


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])
  return (
    <div className="App">
      {
        loading?<Loader/>
        :
      
      <Router>
        <ScrollToTop>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path= "/login" component={Login}/>
            <Route path= "/schools" component={Schools}/>
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
      }

    </div>
  );
}

export default App;
