import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.backdropColor};
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
