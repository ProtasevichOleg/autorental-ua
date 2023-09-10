import styled from 'styled-components';

export const ProductCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 268px;
  width: 274px;
  border-radius: 14px;
  background: ${p => p.theme.productCardBgColor};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

export const AddToFavoriteWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
`;

export const AddToFavorite = styled.button`
  border: none;
  width: 18px;
  height: 18px;
  background: transparent;
`;

export const Icon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  stroke: ${p => p.theme.accentColor};
  fill: ${p => p.theme.accentColor};
  stroke: ${p => p.theme.accentColor};
  fill: ${p => p.theme.accentColor};
`;

export const CardDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const TopDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
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

export const Price = styled.strong`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;

export const CardTagContainer = styled.div`
  width: 274px;
  height: 40px;
  overflow: hidden;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  border-radius: 12px;
  border: none;

  background-color: ${p => p.theme.accentColor};
  color: ${p => p.theme.buttonTextColor};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.accentHoverColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
