import styled from 'styled-components';

export const MileageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
`;

export const MileageTitle = styled.span`
  color: ${p => p.theme.inputLabelColor};
`;

export const BothInputsWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const MileageInputWrapper = styled.div`
  flex: 1;
  position: relative;

  input {
    width: 100%;
    padding: ${p =>
      p.$position === 'right' ? '14px 24px 14px 48px' : '14px 24px 14px 70px'};
    background-color: ${p => p.theme.inputBgColor};
    border: none;
    border-right: ${p =>
      p.$position === 'right' ? 'none' : p.theme.inputBorderColor};
    border-radius: ${p =>
      p.$position === 'right' ? '0 14px 14px 0' : '14px 0 0 14px'};
    font-size: 18px;
    line-height: 111.111%;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  pointer-events: none;
`;
