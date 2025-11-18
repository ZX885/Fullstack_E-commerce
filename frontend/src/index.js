import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { globalReducer, context, initialState } from './conf/store';
import { useReducer } from 'react';
import { BrowserRouter } from "react-router-dom";
import AllComponents from './components/AllComponents';
import ContextProvider from './conf/Context';
const AppWrapper = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <ContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <AllComponents />
        </BrowserRouter>
      </React.StrictMode>
    </ContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);
reportWebVitals();