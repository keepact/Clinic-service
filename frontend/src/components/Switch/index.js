import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';

import { ThemeContext } from 'styled-components';
import Context from '~/context';

function ThemeSwitcher() {
  const { colors, title } = useContext(ThemeContext);
  const [toggleTheme] = useContext(Context);

  return (
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
  );
}

export default ThemeSwitcher;
