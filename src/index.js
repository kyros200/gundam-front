import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageLayout from './layouts/PageLayout';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<MainPage isEdit={false} />} />
            <Route path="edit" element={<MainPage isEdit={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
