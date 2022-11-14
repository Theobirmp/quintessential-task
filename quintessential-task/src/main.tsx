import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DarkModeProvider } from './theme/DarkModeContext';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <Router>
          <App />
        </Router>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
);
