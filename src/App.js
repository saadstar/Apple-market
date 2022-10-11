import './App.css';
import { Header } from './component/Header';
import { Home } from './component/Home';
import { Products } from './component/Products';
import { Contact } from './component/Contact';
import { About } from './component/About';
import {ProductDetails} from "./component/ProductDetails"
import { Footer } from './component/Footer';
import { Switch, Route, Redirect } from "react-router-dom";
import CARTT from './component/CARTT';
function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" > <Home /></Route>
        <Route exact path="/products"><Products /></Route>
        <Route exact path="/products/:id" component={ProductDetails}></Route>
        <Route exact path="/cart"><CARTT /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Redirect path="/" />
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
