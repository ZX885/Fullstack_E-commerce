import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { globalReducer, context, initialState } from './conf/store';
import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllComponents from './components/AllComponents';


const AppWrapper = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  state.dispatch = dispatch

  return (
    <context.Provider value={{ state, dispatch }}>
      <React.StrictMode>
        <BrowserRouter future={{
          v7_startTransition: true,
        }}>
          {/* <App /> */}
          <AllComponents />
        </BrowserRouter>
      </React.StrictMode>
    </context.Provider>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
