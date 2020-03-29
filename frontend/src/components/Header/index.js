import React from 'react';

import logo from '~/assets/logo.png';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Clinic" />
      </Content>
    </Container>
  );
}

export default Header;
