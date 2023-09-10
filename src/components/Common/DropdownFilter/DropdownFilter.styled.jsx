import styled, { css } from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${p => (p.$type === 'price' ? '125px' : '224px')};
`;

export const StyledLabel = styled.label`
  color: ${p => p.theme.inputLabelColor};
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px 56px 14px 18px;
  background-color: ${p => p.theme.inputBgColor};
  border: none;
  border-radius: 14px;
  outline: none;
  cursor: ${p => (p.$type === 'price' ? 'pointer' : 'auto')};
  caret-color: ${p => (p.$type === 'price' ? 'transparent' : 'auto')};

  font-size: 18px;
  line-height: 111.111%;

  &::placeholder {
    color: currentColor;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 56px;
  border: none;
  border-radius: 14px;
  background-color: transparent;
`;

export const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    rotate(${p => (p.$isOpen ? '180deg' : '0deg')});
  transition: transform 0.3s ease;
  pointer-events: none;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  width: 100%;
  max-height: 272px;
  overflow-y: auto;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: ${p => p.theme.mainBgColor};
  border-radius: 14px;
`;

export const OptionItem = styled.li`
  padding: 10px;
  color: ${p => p.theme.unactiveTextColor};
  cursor: pointer;
  ${p =>
    p.$matched &&
    css`
      color: currentColor;
    `}
`;
