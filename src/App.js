import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import Beers from './components/Beers';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="default-layout">
            <Header />
            <Subheading subheading={rest.subheading} />
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
        <DefaultLayout path="/" exact component={Home} subheading="Home"/>
        <DefaultLayout path="/beers" exact component={Beers} subheading="Beers" />
        <DefaultLayout path="/about" component={About} subheading="About"/>
      </div>
    );
  }
}

export default App;
