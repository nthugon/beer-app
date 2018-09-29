import React, { Component } from 'react';
import './Beers.css';

class Beers extends Component {
  constructor() {
    super();
    this.state = { beers: [] };
  }

  async componentDidMount() {
    const response = await fetch('https://brj-server.herokuapp.com/api/beers');
    const json = await response.json();
    console.log(json);
    this.setState({ beers: json });
  }

  render() {
    return (
      <div>
        <h3 className="content-heading">Select a Beer to See Reviews</h3>
        <div>
          {this.state.beers.map(beer => (
            <div className="beer-listing" key={beer.name}>
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
          ))}        
        </div>
      </div>
    );
  }
}

export default Beers;