import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import App from './App';
import { EventEmitter } from './contexts/EventContext';
import { UserProvider } from './contexts/UserContext';
import theme from './theme';
import './index.css';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    thunk,
  ),
));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createMuiTheme(theme)}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <UserProvider>
            <EventEmitter>
              <App />
            </EventEmitter>
          </UserProvider>
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
