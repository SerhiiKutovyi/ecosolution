import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  border-top: 1px solid var(--burger-hover-background-color);

  a {
    font-family: var(--title-font);
    font-style: normal;
    font-size: 16px;
    line-height: calc(19.2 / 16);
  }

  p {
    text-align: center;

    font-family: var(--title-font);
    font-style: normal;
    font-size: 16px;
    line-height: calc(19.2 / 16);
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
  justify-content: center;
  gap: 8px;

  margin-bottom: 24px;
`;

export const Address = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export const Email = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: var(--burger-hover-background-color);
  transition: var(--animation);

  cursor: pointer;

  &:hover,
  :focus {
    background-color: var(--title-text-main-color);
    transition: var(--animation);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
