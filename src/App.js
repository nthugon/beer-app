import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Beers = () => (
  <div>
    <h2> Beers </h2>
  </div>
);

const About = () => (
  <div>
    <h2> About </h2>
  </div>
);

function Header() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/about">About</Link></li>        
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div> Another awesome app by Nathan Hugon!</div>
  );
}

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="DefaultLayout">
            <Header />
            <Component {...matchProps} />
            <Footer />
          </div>
        )} />
      );
    };

    return (
      <div>
        <DefaultLayout path="/" exact component={Home} />
        <DefaultLayout path="/beers" exact component={Beers} />
        <DefaultLayout path="/about" component={About} />
      </div>
    );
  }
}

export default App;
