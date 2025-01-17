import React, { useEffect, useState } from 'react';
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
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("coockieAgree") !== null && localStorage.getItem("coockieAgree") === 'true') {
      setAgree(false)
      setAgreeForBackground(false)
    }
  }, [])

  return (
    <>
      {agreeForBackground && <div className='block__div'></div>}
      <Cookies agree={agree} setAgree={setAgree} setAgreeForBackground={setAgreeForBackground} />
      <ErrorBoundary>
        <div className={getLayoutClassName(withSidebar)}>
          <AppHeader toggleMenuVis={() => setMenuIsVisible(!menuIsVisible)} />
          {withSidebar && <AppAside menuIsVisible={menuIsVisible} />}
          <main>
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </ErrorBoundary>
    </>
  );
};
