import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/data_vis_colors';

const loadingImg =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const LoadingSection = styled.div`
  height: 80vh;
  width: 100vw;
  display: grid;
  justify-items: center;
  padding-top: 20%;
  background-color: ${colors.background_color};

  img {
    width: 15%;
    max-width: 10rem;
  }
`;

const LoadingPage = () => {
  return (
    <LoadingSection>
      <img src={loadingImg} alt="Loading..." />
    </LoadingSection>
  );
};

export default LoadingPage;
