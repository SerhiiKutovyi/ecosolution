import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin-bottom: 24px;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 28px;
    line-height: calc(28 / 28);
  }

  p {
    margin-bottom: 36px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 16px;
    line-height: calc(19.2 / 16);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 24px;
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
`;
