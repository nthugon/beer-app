import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Beer } from 'styled-icons/fa-solid';
import { Home } from 'styled-icons/fa-solid';
import { InfoCircle } from 'styled-icons/fa-solid';

const FooterWrapper = styled.footer`
  box-sizing: border-box;    
  text-align: center;
  padding: 10px 0 0;
  color: #fafafa;
  background: #005778;
  font-size: 1.6rem;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

const FooterNav = styled.nav`
  list-style: none;            
  font-size: 1.6rem;            
  display: flex;
  flex-direction: row;
`;

const FooterNavLink = styled(Link)`
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #fafafa;

  &:visited {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #fafafa;
  }
`;

const FooterNavLinkText = styled.li`
  padding: 5px 0 0;
  font-size: 1.0rem;
`;

const BeerIcon = styled(Beer)`
  height: 20px;
  width: 20px;
`;

const HomeIcon = styled(Home)`
  height: 20px;
  width: 20px;
`;

const InfoCircleIcon = styled(InfoCircle)`
  height: 20px;
  width: 20px;
`;

const Footer = () => ( 
  <FooterWrapper>
    <FooterNav>
      <FooterNavLink to="/">
        <HomeIcon />
        <FooterNavLinkText>HOME</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/beers">
        <BeerIcon />
        <FooterNavLinkText>BEERS</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/about">
        <InfoCircleIcon />
        <FooterNavLinkText>ABOUT</FooterNavLinkText>
      </FooterNavLink>
    </FooterNav>
  </FooterWrapper>
);

export default Footer;