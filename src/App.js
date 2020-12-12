import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';


function App() {
  
  return (
    <Router>
     <div className="app">
       <div className="container">
         <div className="row">
       
         <div className="col-3">
               
         <div className="app_sidebar">
                  <Sidebar></Sidebar>
                </div>
                
                
          </div>
          <div className="col-9 app_main-content">
              <Navbar></Navbar>
              <Switch>
              <Route exact path="/">
                 <About></About>
              </Route>
              <Route path="/resume">
                 <Resume></Resume>
              </Route>
              <Route path="/projects" component={Projects}>
           </Route>
           <Route>
             <Redirect to ="/" ></Redirect>
           </Route>
           </Switch>
          </div> 
          </div>
        </div>     
    </div>
    </Router>
  );
}




export default App;
