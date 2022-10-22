import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Route,Switch, Redirect } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <>
    <Header/>
    <Switch >
       < Route exact path="/" component={Home} />
       < Route exact path="/Products" component={Product} />
       < Route exact path="/Cart" component={Cart} />
       < Route exact path="/Checkout" component={Checkout} />
       < Route exact path="/Products/:id" component={ProductDetail} />
       < Route exact path="/Contact" component={Contact} />
       < Route exact path="/About" component={About} />
       <Redirect to ="/"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
