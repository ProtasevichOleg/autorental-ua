import { BurgerButton, StyledHeader, Icon } from './Header.styled';
import icon from 'assets/icons/sprite.svg';

const Header = ({ toggleSidebar }) => {
  return (
    <StyledHeader>
      <BurgerButton onClick={toggleSidebar}>
        <Icon height="24">
          <use href={icon + '#menu'}></use>
        </Icon>
      </BurgerButton>
    </StyledHeader>
  );
};
export default Header;
