import React, { Component } from 'react';
import './Beer.css';

// function ReactDefault({ match }) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         <h2>Welcome, {match.params.username}</h2>
//       </header>
//       <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload.
//       </p>
//     </div>
//   );
// }

class Beer extends Component {
  constructor(matchProps) {
    super(matchProps);
    this.state = {
      id: matchProps.match.params.id,
      error: null,
      isLoaded: false,
      reviews: [],
    };
  }

  async componentDidMount() {
    try {
      console.log("this.state.id: ", this.state.id);
      const response = await fetch(`https://brj-server.herokuapp.com/api/beers/${this.state.id}`);
      const json = await response.json();
      if (response.ok) {        
        this.setState({
          isLoaded: true,
          reviews: json.reviews
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

  render() {
    const { error, isLoaded, reviews } = this.state;
    if (error) {
      return <div className="content-heading error">Error: {error}</div>;
    } else if (!isLoaded) {
      return <div className="content-heading">Loading...</div>;
    } else {
      return (
        <div>
          <h2>Welcome, {this.state.id}</h2>
          {reviews.map(review => (
            <div key={review._id}>
              <div title="{review.comments}" className="detail-line">
                {review.comments} 
              </div>
            </div>


          ))}

        </div>

      );
    }
  }
}

export default Beer;