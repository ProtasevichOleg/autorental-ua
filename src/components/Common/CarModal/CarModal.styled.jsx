import styled from 'styled-components';

export const StyledCarModal = styled.div`
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: ${p => p.theme.mainBgColor};
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalTagContainer = styled.div`
  width: 461px;
  height: 40px;
  overflow: hidden;
`;

export const ModalTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;

  font-size: 16px;
  line-height: 150%;
`;

export const CarModel = styled.strong`
  color: ${p => p.theme.accentColor};
`;

export const ModalDescription = styled.div`
  /*  */
`;

export const ModalThirdTitle = styled.h3`
  /*  */
`;


