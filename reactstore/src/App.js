import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Route,Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Switch >
       < Route to="/" component={Home} />
       < Route to="/Products" component={Product} />
       < Route to="/Contact" component={Contact} />
       < Route to="/About" component={About} />
       <Redirect to ="/"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
