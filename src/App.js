import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Blog from './Component/Home/Blog/Blog';
import NavBar from './Component/Home/NavBar/NavBar';
import Projects from './Component/Home/Projects/Projects';
import Customer from './Component/Home/Customer/Customer';


function App() {
  return (
    <div>

    <Router>
   <Switch>
   <Route exact path='/'> <Home></Home></Route>
   <Route exact path='/home'> <Home ></Home></Route>
   <Route path='/blog'> <Blog></Blog> </Route>
   <Route path='/blog'> <Blog></Blog> </Route>
   <Route path='/projects'> <NavBar></NavBar> <Projects></Projects> </Route>
   <Route path='/about'> <section className="banner"> <Customer></Customer> </section>  </Route>
   </Switch>
   </Router>
     
    </div>
  );
}

export default App;
