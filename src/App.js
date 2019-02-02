import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Subheading from './components/Subheading';
import Footer from './components/Footer';
import Home from './components/Home';
import Beers from './components/Beers';
import Beer from './components/Beer';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {

    const DefaultLayout = ({component: Component, ...rest}) => {
      return (
        <Route {...rest} render={matchProps => (
          <div className="default-layout">
            <Header />
            <Subheading subheading={rest.subheading} link={rest.link}/>
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
        <DefaultLayout path="/" exact component={Home} subheading="Home" link="Beers"/>
        <DefaultLayout path="/beers" exact component={Beers} subheading="Beers" link="Home" />
        <DefaultLayout path="/beers/:id" component={Beer} subheading="Reviews" link="Beers"/>
        <DefaultLayout path="/about" component={About} subheading="About" link="Beers"/>
      </div>
    );
  }
}

export default App;
