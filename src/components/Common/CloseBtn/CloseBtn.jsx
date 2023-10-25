import { CloseButton, CloseIcon } from './CloseBtn.styled';
import icon from 'assets/icons/sprite.svg';

const CloseBtn = ({ onClick }) => {
  return (
    <CloseButton onClick={onClick}>
      <CloseIcon width="24" height="24">
        <use href={icon + '#close'}></use>
      </CloseIcon>
    </CloseButton>
  );
};

export default CloseBtn;
