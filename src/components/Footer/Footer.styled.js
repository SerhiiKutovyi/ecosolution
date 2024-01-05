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

    padding-top: 140px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;

    padding-left: 100px;
    padding-right: 100px;
  }

  a {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(19.2 / 14);
  }

  p {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(19 / 14);
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto 171px 171px;
    grid-row-gap: 16px;
  }
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

  @media screen and (min-width: 1440px) {
    top: 100px;

    width: 1240px;
  }
`;

export const Logo = styled.li``;

export const Btn = styled.li`
  justify-self: end;

  @media screen and (min-width: 768px) {
    grid-row-start: 1;
    grid-column-start: 3;
    justify-self: end;
    align-self: end;

    padding-bottom: 8px;
  }
`;

export const Icons = styled.li`
  display: grid;
  grid-template-columns: 24px 24px;
  grid-column-gap: 8px;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;

  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    align-self: end;
    grid-column-start: unset;
    grid-column-end: unset;
    justify-self: start;

    padding-bottom: 12px;

    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const Address = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    grid-column-start: unset;
    grid-column-end: unset;
    justify-self: start;

    margin-bottom: 0px;
  }
`;

export const Email = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    grid-column-start: unset;
    grid-column-end: unset;
    justify-self: start;

    margin-bottom: 0px;
  }
`;

export const Ecosolution = styled.li`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  @media screen and (min-width: 768px) {
    grid-column-start: unset;
    grid-column-end: unset;
    justify-self: end;
  }
`;
