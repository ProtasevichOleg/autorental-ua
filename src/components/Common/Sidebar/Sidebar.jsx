import {
  Backdrop,
  Sidebar,
  CloseButtonWrapper,
  Navigation,
  NavigationList,
  NavigationItem,
  Icon,
  NavItemName,
} from './SideBar.styled';

import icon from 'assets/icons/sprite.svg';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { disableScrolling } from 'helpers/disableScrolling';
import CloseBtn from '../CloseBtn/CloseBtn';

const SideBar = ({ isOpen, toggleSidebar, mainLayoutRef }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const closeSidebar = () => toggleSidebar(false);
  const handleLinkClick = () => closeSidebar();

  useEffect(() => {
    const mainLayoutElement = mainLayoutRef.current;

    let touchStartX = 0;

    const handleTouchStart = e => (touchStartX = e.touches[0].clientX);

    const handleTouchMove = e => {
      const touchX = e.touches[0].clientX;
      const touchOffset = touchX - touchStartX;
      if (touchOffset > 100 && !isOpen) toggleSidebar(true);
    };

    if (mainLayoutElement) {
      mainLayoutElement.addEventListener('touchstart', handleTouchStart);
      mainLayoutElement.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (mainLayoutElement) {
        mainLayoutElement.removeEventListener('touchstart', handleTouchStart);
        mainLayoutElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isOpen, toggleSidebar, mainLayoutRef]);

  useEffect(() => {
    const currentSidebarRef = sidebarRef.current;

    const handleTouchStart = e => {
      currentSidebarRef.touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = e => {
      const touchX = e.touches[0].clientX;
      const touchOffset = currentSidebarRef.touchStartX - touchX;

      if (touchOffset > 100) {
        toggleSidebar(false);
      }
    };

    if (isOpen && currentSidebarRef) {
      currentSidebarRef.addEventListener('touchstart', handleTouchStart);
      currentSidebarRef.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (currentSidebarRef) {
        currentSidebarRef.removeEventListener('touchstart', handleTouchStart);
        currentSidebarRef.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isOpen, toggleSidebar]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    disableScrolling(isOpen);
    return () => {
      disableScrolling(false);
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={closeSidebar} />
      <Sidebar $isOpen={isOpen} $windowHeight={windowHeight} ref={sidebarRef}>
        <CloseButtonWrapper>
          <CloseBtn onClick={closeSidebar} />
        </CloseButtonWrapper>
        <Navigation>
          <NavigationList>
            <li>
              <NavigationItem
                to="/"
                onClick={handleLinkClick}
                $isActive={location.pathname === '/'}
              >
                <Icon>
                  <use href={icon + '#home'}></use>
                </Icon>
                <NavItemName>Home</NavItemName>
              </NavigationItem>
            </li>

            <li>
              <NavigationItem
                to="/catalog"
                onClick={handleLinkClick}
                $isActive={location.pathname.startsWith('/catalog')}
              >
                <Icon>
                  <use href={icon + '#gallery'}></use>
                </Icon>
                <NavItemName>Catalog</NavItemName>
              </NavigationItem>
            </li>

            <li>
              <NavigationItem
                to="/favorites"
                onClick={handleLinkClick}
                $isActive={location.pathname.startsWith('/favorites')}
              >
                <Icon>
                  <use href={icon + '#heart'}></use>
                </Icon>
                <NavItemName>Favorites</NavItemName>
              </NavigationItem>
            </li>
          </NavigationList>
        </Navigation>
      </Sidebar>
    </>
  );
};

export default SideBar;
