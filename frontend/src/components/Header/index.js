import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo.png';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Clinic" />
        </Link>
      </Content>
    </Container>
  );
}

export default Header;
