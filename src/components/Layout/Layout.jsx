import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} position="top-center"/>
    </>
  );
};
