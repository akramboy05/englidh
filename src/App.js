import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./scroll-to-top/ScrollToTop";
import Home from "./router/home/Home";
import Admin from "./router/admin/Admin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Router>
        <ScrollToTop>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
