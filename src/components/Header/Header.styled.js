import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;

  z-index: 11;

  display: flex;
  align-items: center;

  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 110px;

  height: 112px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    margin-bottom: 164px;
  }
`;
