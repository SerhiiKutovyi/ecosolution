import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 36px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  h2 {
    margin-bottom: 24px;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 28px;
    line-height: calc(28 / 28);

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 72px;

      font-family: var(--title-font);
      font-style: normal;
      font-size: 36px;
      line-height: calc(36 / 36);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 24px;
    grid-column-gap: 24px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
    }
  }

  li {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-row-gap: 24px;
      grid-column-gap: 24px;
    }
  }

  p {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(16.8 / 14);
  }
`;

export const AboutCards = styled.div`
  width: 148px;
  height: 197px;

  padding-top: 13px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;

  background-color: var(--about-background-color);

  @media screen and (min-width: 768px) {
    width: 159px;
  
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutImg = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    min-width: 342px;
  }
`;

export const GreenLine = styled.div`
  display: none;

  margin-left: 82px;
  margin-right: 11px;
  height: 110px;
  border-left: 1px solid var(--burger-hover-background-color);

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const AboutText = styled.p`
  margin-bottom: 36px;

  font-family: var(--main-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(19.2 / 16);

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const AboutGrid = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid var(--burger-hover-background-color);
`;

export const Values = styled.p`
  font-family: var(--title-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(24 / 16);
`;
