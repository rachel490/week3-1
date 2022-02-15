import styled, { css } from 'styled-components';

export const Container = styled.li<{ isList?: boolean }>`
  list-style: none;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background-color: white;

  ${({ isList }) =>
    isList &&
    css`
      height: 124px;
      padding: 17px 0 17px 17px;
    `}
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ItemImage = styled.img<{ isList?: boolean }>`
  width: ${({ isList }) => (isList ? '90px' : '70px')};
  height: ${({ isList }) => (isList ? '90px' : '70px')};
  cursor: pointer;
`;

export const TextContainer = styled.div`
  margin: 0 14px;
`;

export const ItemNameText = styled.span<{ isList?: boolean }>`
  display: block;
  margin-bottom: 13px;
  margin-top: ${({ isList }) => isList && '7px'};
`;

export const DiscountText = styled.span`
  color: #ff5757;
  margin-right: 9px;
`;

export const SellingPriceText = styled.span`
  margin-right: 6px;
`;

export const GrayText = styled.span<{ isList?: boolean }>`
  color: #808080;
  font-size: 14px;
  ${({ isList }) =>
    !isList &&
    css`
      text-decoration: line-through;
    `}
`;
