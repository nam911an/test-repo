 
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import Notifications from './Notifications';
import Withdrawals from './Withdrawals';
import NewsHeadlines from './NewsHeadlines';
import Error from './Error';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard props={{userName: "hey pls chal jao"}}/>} />
     
      <Route path="/accounts" element={<Accounts name="Accounts"/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="/withdrawals" element={<Withdrawals/>} />
      <Route path="/newsheadlines" element={<NewsHeadlines/>} />

      <Route path="*" element={<Error/>} />
     
  
    </Routes>
  </BrowserRouter>
}

export default App;
