import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/css/index.less';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import store from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </Provider>
);
