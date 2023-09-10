import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.backdropColor};
  z-index: 5;
  opacity: ${p => (p.$isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-out;
  pointer-events: ${p => (p.$isOpen ? 'auto' : 'none')};
`;

export const Sidebar = styled.aside`
  width: 225px;
  height: ${p => `${p.$windowHeight}px`};
  background-color: ${p => p.theme.mainBgColor};
  transform: ${p => (p.$isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const CloseButtonWrapper = styled.div`
  padding: 34px 0 34px 173px;
`;

export const Navigation = styled.nav`
  /* outline: 1px solid; */
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  padding: 20px;

  li svg {
    fill: none;
    stroke: currentColor;
  }
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  color: ${p => (p.$isActive ? p.theme.accentColor : 'inherit')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.inputBgColor};
    color: ${p => p.theme.accentColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
`;

export const NavItemName = styled.span`
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
`;
