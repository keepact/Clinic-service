import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';
import { usePersistedState } from '~/util/hooks';

import light from '~/styles/themes/light';
import dark from '~/styles/themes/dark';
import Header from '~/components/Header';
import Context from '~/context';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Context.Provider value={[toggleTheme]}>
              <Header />
              <Routes />
            </Context.Provider>

            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
