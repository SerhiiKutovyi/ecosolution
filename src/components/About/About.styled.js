import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 36px;
  
  h2 {
    margin-bottom: 24px;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 28px;
    line-height: calc(28 / 28);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 24px;
  }

  li {
    width: 148px;
    height: 197px;

    padding-top: 13px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 12px;

    background-color: var(--about-background-color);
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    padding-bottom: 33px;
    margin-bottom: 12px;

    border-bottom: 1px solid #97d28b;
  }

  p {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(16.8 / 14);
  }
`;

export const AboutText = styled.p`
  margin-bottom: 36px;

  font-family: var(--main-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(19.2 / 16);
`;

export const Values = styled.p`
  font-family: var(--title-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(24 / 16);
`;
