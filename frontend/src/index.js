import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import UserProfile from './components/UserProfile/Userprofile';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />

    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<BrowserRouter >
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="/user-profile" element={<UserProfile />} />
    </Routes>
    </BrowserRouter>
*/