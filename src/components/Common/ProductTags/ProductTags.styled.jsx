import styled from 'styled-components';

export const TagSet = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  row-gap: 4px;
  column-gap: 12px;
  overflow: hidden;
  flex-wrap: wrap;

  color: ${p => p.theme.secondaryTextColor};
`;

export const Tag = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  position: relative;

  &.has-after::after {
    content: '';
    position: absolute;
    right: -6px;
    width: 1px;
    height: 16px;
    background-color: currentColor;
  }
`;
