import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  h2 {
    margin-bottom: 96px;
    margin-left: auto;
    margin-right: auto;

    text-align: center;
    font-family: var(--title-font);
    font-style: normal;
    font-size: 28px;
    line-height: calc(28 / 28);

    @media screen and (min-width: 768px) {
      margin-bottom: 135px;

      width: 368px;

      font-size: 36px;
      line-height: calc(36 / 36);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-family: var(--title-font);
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    line-height: calc(48 / 48);
    color: var(--burger-hover-background-color);

    @media screen and (min-width: 768px) {
      gap: 24px;

      font-size: 100px;
      line-height: calc(100 / 100);
    }
  }

  span {
    font-family: var(--title-font);
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: calc(24 / 24);
    color: var(--title-text-main-color);

    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: calc(48 / 28);
    }
  }
`;

export const Line = styled.div`
  position: absolute;

  height: 48px;
  width: 1px;

  top: 80px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: var(--burger-hover-background-color);

  @media screen and (min-width: 768px) {
    top: 96px;

    height: 87px;
  }
`;
