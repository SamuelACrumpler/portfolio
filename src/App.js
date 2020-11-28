import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import home from './routes/home';
import projects from './routes/projects';
import about from './routes/about';
import contact from './routes/contact';



function App() {
  return (
    <main className="main full-height">
    <BrowserRouter>
      
        <Route path="/" component={withRouter(home)} exact />
        <Route path="/projects" component={withRouter(projects)} />
        <Route path="/about" component={withRouter(about)} />
        <Route path="/contact" component={withRouter(contact)} />
 
    </BrowserRouter>
  </main>

  );
}

export default App;
