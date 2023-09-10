import styled from 'styled-components';

export const StyledCarFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 50px;
`;

export const FilterFieldset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.accentColor};
  color: ${p => p.theme.buttonTextColor};
  padding: 14px 44px;
  border-radius: 12px;
  border: none;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.accentHoverColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
