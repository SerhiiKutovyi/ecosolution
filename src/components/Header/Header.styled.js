import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;

  z-index: 11;

  display: flex;
  align-items: center;

  margin-right: auto;
  margin-left: auto;

  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 20px;
  padding-right: 20px;

  width: 360px;
  background-color: ${props => (props.headerColor ? '#FFFFFF' : '#f3f5fa')};

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
  }
`;
