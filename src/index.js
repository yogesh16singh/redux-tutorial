import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';





// store.subscribe(()=>console.log(store.getState()));

// store.dispatch({type:"increment"});
// store.dispatch({type:"increment"});
// store.dispatch({type:"decrement"});
// store.dispatch({type:"inc"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

