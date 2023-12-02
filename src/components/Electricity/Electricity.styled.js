import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: 36px;

  h2 {
    margin-bottom: 96px;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 28px;
    line-height: calc(28 / 28);

    text-align: center;
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
  }

  span {
    font-family: var(--title-font);
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: calc(24 / 24);
    color: var(--title-text-main-color);
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
`;
