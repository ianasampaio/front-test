import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './components/Contacts';
import { NotFound } from './components/NotFound';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { ContactAdd } from './components/Contact';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    < ToastContainer autoClose={3000}/>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts" element={<Contacts />}>
          <Route path=":id" element={<ContactAdd />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
