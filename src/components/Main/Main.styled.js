import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 36px;

  div {
    border-bottom: 1px solid rgba(151, 210, 139, 1);
     margin-bottom: 24px;
  }

  h1 {
   

    font-family: var(--title-font);
    font-style: normal;
    font-size: 36px;
    line-height: calc(36 / 36);
  }

  p {
    margin-bottom: 24px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 16px;
    line-height: calc(19.2 / 16);
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 100%;
`;
