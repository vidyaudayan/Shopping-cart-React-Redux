

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './app/store';
import { Provider } from 'react-redux';
import Root from './routes/root.jsx';
import Home from './routes/home.jsx';
import Cart from './components/cart/cart.jsx';

import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

