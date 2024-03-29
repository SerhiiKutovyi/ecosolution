import styled from 'styled-components';

export const Wrapper = styled.div`
 
  display: flex;
`;

export const CasesTitle = styled.h2`
  width: 264px;

  margin-bottom: 24px;

  font-family: var(--title-font);
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: calc(28 / 28);

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    font-size: 36px;
    line-height: calc(36 / 36);
  }
`;

export const GreenLine = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 90px;

    display: block;

    height: 65px;

    border-left: 1px solid var(--burger-hover-background-color);
  }
`;
