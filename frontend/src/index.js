import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { globalReducer, context, initialState } from './conf/store';
import { useReducer } from 'react';
import { BrowserRouter } from "react-router-dom";
import AllComponents from './components/AllComponents';

const AppWrapper = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <context.Provider value={{ ...state, dispatch }}>
      <React.StrictMode>
        <BrowserRouter>
          <AllComponents />
        </BrowserRouter>
      </React.StrictMode>
    </context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);
reportWebVitals();