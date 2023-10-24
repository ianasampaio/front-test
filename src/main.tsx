import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contacts } from './components/Contacts';
import { Posts } from './components/Posts';
import { NotFound } from './components/NotFound';
import { Post } from './components/Post';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    < ToastContainer autoClose={3000}/>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
