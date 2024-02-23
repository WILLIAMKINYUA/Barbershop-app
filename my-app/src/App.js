import{BrowserRouter as Router,Switch,Route}from"react-router-dom"
import Navbar from "./Component/Navbar";
import Home from "./Home/Home";
import Service from "./Services/Service";
import Contact from "./Contact/Contact";
import About from "./About/About";
function App() {return(
<div className="app">
  <Router><Navbar/><Switch>
    <Route exact path='/'><Home/></Route>
    <Route path='/service'><Service/></Route>
    <Route path='/contact'><Contact/></Route>
    <Route path='/about'><About/></Route>
  </Switch>
  
  </Router></div>)
}

export default App;
