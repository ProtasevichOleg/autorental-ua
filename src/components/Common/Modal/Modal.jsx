import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer, CloseBtnWrapper } from './Modal.styled';
import CarModal from '../CarModal/CarModal';
import CloseBtn from '../CloseBtn/CloseBtn';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ car, toggleModal }) => {
  return createPortal(
    <Backdrop onClick={() => toggleModal(false)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseBtnWrapper>
          <CloseBtn onClick={() => toggleModal(false)} />
        </CloseBtnWrapper>
        <CarModal car={car} />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
