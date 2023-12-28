import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 360px;

  margin-right: auto;
  margin-left: auto;

  padding-top: 61px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: var(--layout-background-color);

  @media screen and (min-width: 480px) {
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-top: 141px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 16px;
  }

  a {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(19.2 / 14);
  }

  p {
    /* text-align: center; */

    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(19 / 14);
  }
`;

export const Btn = styled.li`
  grid-row-start: 1;
  grid-column-start: 3;
  justify-self: end;
`;

export const GreenLine = styled.div`
  position: absolute;
  top: 36px;
  width: 320px;
  border-bottom: 1px solid var(--burger-hover-background-color);

  @media screen and (min-width: 768px) {
    top: 100px;

    width: 708px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Icons = styled.li`
  display: flex;
  /* justify-content: center; */
  gap: 8px;

  /* margin-bottom: 24px; */
`;

export const Address = styled.div`
  /* margin-bottom: 16px; */
  /* text-align: center; */
`;

export const Email = styled.div`
  /* margin-bottom: 16px; */
  /* text-align: center; */
`;
