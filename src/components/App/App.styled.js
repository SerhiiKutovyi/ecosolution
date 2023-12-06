import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  width: 360px;

  padding-left: 20px;
  padding-right: 20px;

  background-color: var(--layout-background-color);

  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
