import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Members from './components/Members';
import Discography from './components/Discography';
import News from './components/News';
import SocialMedia from './components/SocialMedia';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">SEVENTEEN</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home</a>
            <a className="nav-item nav-link" href="/members">Members</a>
            <a className="nav-item nav-link" href="/discography">Discography</a>
            <a className="nav-item nav-link" href="/news">News</a>
            <a className="nav-item nav-link" href="/socialmedia">Social Media</a>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/discography" component={Discography} />
          <Route path="/news" component={News} />
          <Route path="/socialmedia" component={SocialMedia} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

