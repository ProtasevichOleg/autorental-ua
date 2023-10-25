import styled from 'styled-components';

export const StyledCarModal = styled.div`
  width: 541px;
  height: 752px;
  max-height: 95vh;
  padding: 40px;
  border-radius: 24px;
  background-color: ${p => p.theme.mainBgColor};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CarModalContentWrapper = styled.div`
  overflow: auto;
  border-radius: 14px 14px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ModalSubSection = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;

  font-size: 18px;
  line-height: 133.333%;
`;

export const CarModel = styled.strong`
  color: ${p => p.theme.accentColor};
`;

export const ModalSectionTitle = styled.h3`
  font-size: 14px;
  line-height: 142.857%;
`;

export const ModalDescription = styled.div`
  order: 3;
  font-size: 14px;
  line-height: 142.857%;
`;

export const Picture = styled.picture`
  order: 1;
  width: 461px;
  height: 248px;
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalTagContainer = styled.div`
  order: ${p => (p.$isOrdered ? 4 : 'unset')};
  width: 350px;
  height: 40px;
  overflow: hidden;
`;

export const ConditionList = styled.ul`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionItem = styled.li`
  padding: 7px 14px;
  background-color: ${p => p.theme.cardBagesBgColor};
  border-radius: 35px;

  strong {
    font-weight: 600;
    color: ${p => p.theme.accentColor};
  }
`;

export const RentCarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 12px 50px;
  border-radius: 12px;

  font-size: 14px;

  background-color: ${p => p.theme.accentColor};
  color: ${p => p.theme.buttonTextColor};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.accentHoverColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
