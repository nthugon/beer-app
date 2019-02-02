import React from 'react';
import UnstyledLink from '../shared/UnstyledLink';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #78c1ce;
  position: fixed;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

const HeaderText = styled.h1`
  padding: 8px 0 0 4%;
  margin: 0;
  font-size: 2.4rem;
`;

const HeaderPointer = styled.span`
  cursor: pointer;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderText>
      <UnstyledLink to="/">
        <HeaderPointer >HopHub</HeaderPointer>
      </UnstyledLink>       
    </HeaderText>
  </HeaderWrapper>
);

export default Header;