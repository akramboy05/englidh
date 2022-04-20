import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top/ScrollToTop";
import Home from "./router/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from './router/Login/Login';
import Skills from "./router/skills/Skills"
import Grammar from "./router/Grammar/Grammar"
import Vocabulary from "./router/Vocabulary/Vocabulary"
import Business from "./router/business/Business"
import General from "./router/General/General"
import Ielts from "./router/Ielts/Ielts"
import Community from "./router/community/Community"
import Loader from './components/loader/Loader';
import Admin from './router/admin/Admin';
import Speacking from './router/speacking/Speacking';
import Reading from './router/reading/Reading';
import AudioBook from './router/audioBook/AudioBook';
import SinglePage from './router/single-page/SinglePage';
import ProgrammingBooks from "./router/programmingBooks/ProgrammingBooks"
import ReadingSingle from './router/readingSingle/ReadingSingle';
import SpeakingSingle from "./router/speackingSingle/SpeackingSingle"
import ProgrammingSingle from "./router/programmingSingle/ProgrammingSingle"
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  },[])
  return (
    <div className="App">
 
      
      <Router>
        <ScrollToTop>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path= "/login" component={Login}/>
            <Route path= "/skills" component={Skills}/>
            <Route path= "/grammar" component={Grammar}/>
            <Route path= "/vocabulary" component={Vocabulary}/>
            <Route path= "/business" component={Business}/>
            <Route path= "/general" component={General}/>
            <Route exact path= "/ielts" component={Ielts}/>
            <Route path= "/ielts/:id" component={SinglePage}/>
            <Route path= "/Community" component={Community}/>
            <Route path="/admin" component={Admin}/>
            <Route exact path="/speacking" component={Speacking}/>
            <Route  path="/speacking/:id" component={SpeakingSingle}/>
            <Route exact path="/reading" component={Reading}/>
            <Route path="/reading/:id" component={ReadingSingle}/>
            <Route path="/audio" component={AudioBook}/>
            <Route path="/single/:id" component={SinglePage}/>
            <Route exact path="/programming" component={ProgrammingBooks}/>
            <Route path="/programming/:id" component={ProgrammingSingle}/>
            {/* <Route path="/:id" component={Singlepage}/> */}
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>

    </div>
  );
}

export default App;
