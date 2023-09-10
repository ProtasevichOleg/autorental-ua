import styled from 'styled-components';

export const StyledCardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const LoadMoreButton = styled.button`
  background: none;
  color: ${p => p.theme.accentColor};
  font-size: 16px;
  line-height: 150%;
  border: none;
  text-decoration-line: underline;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
