import styled from 'styled-components';

export const FaqTitle = styled.h2`
  margin-bottom: 24px;

  font-family: var(--title-font);
  font-style: normal;
  font-size: 28px;
  line-height: calc(28 / 28);
`;

export const Container = styled.ul`
  margin-bottom: 20px;
  li {
    display: flex;
    flex-direction: row-reverse;

    gap: 8px;

    border-top: 1px solid var(--burger-hover-background-color);
  }

  p {
    padding-top: 16px;
    padding-bottom: 16px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 18px;
    line-height: calc(21.6 / 18);
  }

  span {
    font-family: var(--main-font);
    font-style: normal;
    font-size: 14px;
    line-height: calc(16.8 / 14);
  }
`;
export const Question = styled.p`

  margin-bottom: 12px;

  text-align: center;

  font-family: var(--main-font);
  font-style: normal;
  font-size: 17px;
  line-height: calc(21.6 / 17);
`;
