import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './Pages/About';
import Home from "./Home";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Pages/Contacts';
import Photo from './Pages/Photo';


import Error from './Pages/Error';
//import Gallary from './Gallary';

const App =()=>{
  return(
    <div>
  
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route  path="/about" component={About}/>
    <Route  path="/error" component={Error}/>
    <Route  path="/photo" component={Photo}/>
    <Route exact path="/contact" component={Contacts}/>
   
    <Route/>
    </Switch>
  
  
  </div>
  );
};

export default App;
