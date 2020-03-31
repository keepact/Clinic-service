import React, { useContext } from 'react';
import Switch from 'react-switch';

import { Link, useLocation } from 'react-router-dom';
import { shade } from 'polished';

import { ThemeContext } from 'styled-components';
import Context from '~/context';
import logo from '~/assets/images/logo.png';

import { Container, Content } from './styles';

function Header() {
  const { colors, title } = useContext(ThemeContext);
  const [toggleTheme] = useContext(Context);
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <Container>
          <Content>
            <Link to="/">
              <img src={logo} alt="Clinic" />
            </Link>

            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, colors.primary)}
              onColor={colors.secundary}
            />
          </Content>
        </Container>
      )}
    </>
  );
}

export default Header;
