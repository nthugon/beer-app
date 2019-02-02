import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Listing from './Listing';
import Button from '../../shared/Button';
import CloseX from '../../shared/CloseX';
// import './Beer.css';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      beer: null,
    };
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const response = await fetch(`https://brj-server.herokuapp.com/api/beers/${id}`);
      const json = await response.json();
      if (response.ok) {        
        this.setState({
          isLoaded: true,
          beer: json
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

  // render() {
  //   const { error, isLoaded, beer } = this.state;
  //   if (error) {
  //     return <div className="content-heading error">Error: {error}</div>;
  //   } else if (!isLoaded) {
  //     return <div className="content-heading">Loading...</div>;
  //   } else {
  //     return (
  //       <div className="beer-reviews">
  //         <Link to="/beers">
  //           <FontAwesomeIcon className="close-x" icon={faTimes} />          
  //         </Link>          
  //         <div className="review-heading">
  //           <h2 title="{beer.brewery}">{beer.brewery}</h2>
  //           <h3 title="{beer.name}">{beer.name}</h3>
  //           <p>{beer.reviews.length > 0 ? "has the following reviews:" : "does not yet have any reviews."}</p>
  //         </div>
  //         {beer.reviews.map(review => (
  //           <div className="review-listing" key={review._id}>
  //             <div className="comment" >{
  //             // eslint-disable-next-line react/no-unescaped-entities              
  //             }"{review.comments.length > 0 ? review.comments : "No comment."}" -{review.reviewer}
  //             </div>
  //             <div className="detail-line capitalize">
  //                 Drink Again?: {review.drinkAgain}
  //             </div>
  //           </div>
  //         ))}
  //         <Link to="/beers">
  //           <button className="back-btn">Back to Beers</button>         
  //         </Link>          
  //       </div>
  //     );
  //   }
  // }

  render() {
    const { error, isLoaded, beer } = this.state;
    if (error) {
      return <div className="content-heading error">Error: {error}</div>;
    } else if (!isLoaded) {
      return <div className="content-heading">Loading...</div>;
    } else {
      return (
        <Listing>
          <Link to="/beers">
            <CloseX/>          
          </Link>          
          <Listing.Header>
            <Listing.Brewery title="{beer.brewery}">{beer.brewery}</Listing.Brewery>
            <Listing.Beer title="{beer.name}">{beer.name}</Listing.Beer>
            <Listing.Intro>{beer.reviews.length > 0 ? "has the following reviews:" : "does not yet have any reviews."}</Listing.Intro>
          </Listing.Header>
          {beer.reviews.map(review => (
            <Listing.Review key={review._id}>
              <Listing.Comment>{
              // eslint-disable-next-line react/no-unescaped-entities              
              }"{review.comments.length > 0 ? review.comments : "No comment."}" -{review.reviewer}
              </Listing.Comment>
              <Listing.DrinkAgain>
                  Drink Again?: {review.drinkAgain}
              </Listing.DrinkAgain>
            </Listing.Review>
          ))}
          <Link to="/beers">
            <Button>Back to Beers</Button>         
          </Link>          
        </Listing>
      );
    }
  }


}

Beer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired
};


export default Beer;