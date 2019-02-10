import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import  ProductList  from "./components/ProductList";
import  Favourite  from "./components/Favourite";
import  Default  from "./components/Default";
import ModalComponent from './components/Modal/ModalComponent';
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/favourite" component={Favourite}></Route>
          <Route path="/advancedsearch" component={AdvancedSearch}></Route>
          <Route component={Default}></Route>
        </Switch>
        <ModalComponent />
      </React.Fragment>
    );
  }
}

export default App;
