import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pricing from "./Pricing";
import About from "./About";

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
     <Switch>
       <Route exact path ="/">
         <Home/>
       </Route>
       <Route path ="/pricing">
         <Pricing/>
       </Route>
       <Route path ="/about">
         <About/>
       </Route>
     </Switch>
     <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
