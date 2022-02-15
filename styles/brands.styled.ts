import { contactsStyle } from './contacts.styled';
import styled from 'styled-components';

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  padding: ${contactsStyle.margin.M};
  height: ${contactsStyle.size.blockHeight};
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.textGray};
`;
export const ProductCount = styled.p``;
export const ProductList = styled.ul`
  margin-top: ${contactsStyle.margin.S};
  background-color: ${({ theme }) => theme.color.white};
`;
