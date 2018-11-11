import styled from 'styled-components';

import Header from './Header';
import Brewery from './Brewery';
import Beer from './Beer';
import Intro from './Intro';
import Review from './Review';
import Comment from './Comment';
import DrinkAgain from './DrinkAgain';

const Listing = styled.div`
  text-align: center;
`;

Listing.Header = Header;
Listing.Brewery = Brewery;
Listing.Beer = Beer;
Listing.Intro = Intro;
Listing.Review = Review;
Listing.Comment = Comment;
Listing.DrinkAgain = DrinkAgain;

export default Listing;