import React, { useState, useCallback, useRef } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  LayoutStyled,
  MainStyled,
  MainAndHeaderWrapper,
} from './Layout.styled';
import Container from 'components/Common/Container/Container';
import Loader from 'components/Common/Loader/Loader';
import SideBar from 'components/Common/Sidebar/Sidebar';
import Header from 'components/Common/Header/Header';

const Layout = () => {
  const mainLayoutRef = useRef(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(open => {
    setSidebarOpen(open);
  }, []);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && isSidebarOpen) {
        toggleSidebar(false);
      }
    },
    [isSidebarOpen, toggleSidebar]
  );

  return (
    <LayoutStyled ref={mainLayoutRef} onKeyDown={handleKeyDown} tabIndex="0">
      <SideBar
        mainLayoutRef={mainLayoutRef}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <MainAndHeaderWrapper>
        <Header toggleSidebar={toggleSidebar} />
        <MainStyled>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </MainStyled>
      </MainAndHeaderWrapper>
    </LayoutStyled>
  );
};
export default Layout;
