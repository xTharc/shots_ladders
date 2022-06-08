
import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useTranslation, Trans } from 'react-i18next';
import i18n from './i18n';
// KEY 6LerNyogAAAAAD9X1A4eSHdO2L5hhEukHWdme0EE
// SECRET 6LerNyogAAAAAIF9IZhrtubuV0VZOTgYc4h-BgqQ

import ScrollToTop from './scrollToTop';
import Cookies from './Cookies';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Header';
import ReactDOM from 'react-dom/client';


const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function App() {
 
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <Router >
        <Header />
       
        <ScrollToTop/>
        <Cookies/>
    
        <Routes>
        
            <Route path="/" element={<Navigate to ={i18n.language} />} />
            <Route path={t('menuLines.0.link')} element={<Home />}  />
            <Route path={t('menuLines.2.link')} element={<Shop />}  />
            <Route path={"*"} element={<ErrorPage/>}  />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
