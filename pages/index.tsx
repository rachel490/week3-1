import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import CategoryList from '../components/shared/CategoryList';
import ConItem from '../components/shared/ConItem';
import { CATEGORY, SOON } from '../constants/api';
import useAxios from '../hooks/useAxios';

const Home: NextPage = () => {
  const { response } = useAxios({
    method: 'GET',
    url: CATEGORY,
  });

  const { response: res } = useAxios({
    method: 'GET',
    url: SOON,
  });

  console.log('mainpage');

  return (
    <Wrap>
      <Carousel />
      <CategoryList
        link="/categories/"
        categories={response?.data.conCategory1s}
        type="category"
      />
      <SubTitle>
        <span>놓치지 마세요</span>
        <h2>오늘의 땡처리콘!</h2>
      </SubTitle>
      {res?.data.conItems.map((item) => (
        <ConItem
          conItem={item}
          key={item.id}
          brandName="땡처리"
          isList={true}
        />
      ))}
    </Wrap>
  );
};

export default Home;

const SubTitle = styled.div`
  margin: 30px 0 17px 14px;
  span {
    font-size: 13px;
    font-weight: 500;
    color: #ff5757;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const Wrap = styled.div`
  background-color: #f1f3f4;
  width: 375px;
  height: 812px;
  margin-bottom: 50px;
`;
