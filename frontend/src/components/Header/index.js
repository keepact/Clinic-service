import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from '~/components/Switch';

import logo from '~/assets/images/logo.png';

import { Container, Content } from './styles';

function Header() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <Container>
          <Content>
            <Link to="/">
              <img src={logo} alt="Clinic" />
            </Link>
            <ThemeSwitcher />
          </Content>
        </Container>
      )}
    </>
  );
}

export default Header;
