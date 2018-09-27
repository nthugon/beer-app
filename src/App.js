import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import Beers from './components/Beers';
import About from './components/About';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="default-layout">
            <Header />
            <Subheading />
            <div className="content">
              <Component {...matchProps} />
            </div>
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
