import styled from 'styled-components';

export const Wrap = styled.div`
  width: 375px;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  background-color: white;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const NavList = styled.div`
  height: 40px;
  padding: 0 10px;
  width: 1000px;
  z-index: 10;
  border-bottom: 1px solid #ccc;

  button {
    padding: 10px 14px;
    display: inline-block;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &.active {
      padding: 10px 14px 9px 14px;
      color: #f75656;
      border-bottom: 3px solid #f75656;
    }
  }

  button:last-child {
    margin-right: 13px;
  }
`;
