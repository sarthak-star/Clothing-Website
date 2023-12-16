import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import { ToastContainer, toast } from 'react-toastify';




// const options = {
//   timeout:5000,
//   position: positions.BOTTOM_CENTER,
//   transition:transitions.SCALE
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store} >
    
    <App />
    
  </Provider>
  </Router>
);

