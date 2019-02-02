import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Beers.css';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      beers: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://brj-server.herokuapp.com/api/beers');
      const json = await response.json();
      if (response.ok) {        
        this.setState({
          isLoaded: true,
          beers: json
        });
      } else {
        this.setState({
          isLoaded: true,
          error: json.error
        });
      }
    } catch(error) {
      this.setState({
        isLoaded: true,
        error: error.message
      });
    }
  }

  // componentDidMount() {
  //   fetch('https://brj-server.herokuapp.com/api/revie')
  //     .then(result => result.json())
  //     .then(
  //       (result) => {
  //         if (result.ok) {            
  //           this.setState({
  //             isLoaded: true,
  //             beers: result
  //           });
  //         } else {
  //           this.setState({
  //             isLoaded: true,
  //             error: result.error
  //           });
  //         }
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error: error.message
  //         });
  //       }
  //     );
  // }

  render() {
    const { error, isLoaded, beers } = this.state;
    if (error) {
      return <div className="content-heading error">Error: {error}</div>;
    } else if (!isLoaded) {
      // return <div className="content-heading">Loading...</div>;
      return <div className="loader"></div>;
    } else {
      return (
        <div>
          <h3 className="content-heading">Select a Beer to See Reviews</h3>
          <div>
            {beers.map(beer => (
              <Link className="beer-link" key={beer.name} to={`/beers/${beer._id}`}>
                <div className="beer-listing">
                  <div title="{beer.brewery}" className="detail-line">
                    {beer.brewery} 
                  </div>
                  <div title="{beer.name}" className="title-line">
                    {beer.name} 
                  </div>
                  <div className="detail-line">
                    {beer.style} {beer.abv}<span>{beer.abv ? "% abv" : ""}</span>
                  </div>
                </div>
              </Link>
            ))}        
          </div>
        </div>
      );
    }
  }
}

export default Beers;