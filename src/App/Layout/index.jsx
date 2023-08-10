import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import Cookies from '../Components/coockie/coockie';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  const [agree, setAgree] = useState(true);
  const [agreeForBackground, setAgreeForBackground] = useState(true);
  return (
    <>
      {agreeForBackground && <div className='block__div'></div>}
      <Cookies agree={agree} setAgree={setAgree} setAgreeForBackground={setAgreeForBackground} />
      <ErrorBoundary>
        <div className={getLayoutClassName(withSidebar)}>
          <AppHeader />
          {withSidebar && <AppAside />}
          <main>
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </ErrorBoundary>
    </>
  );
};
