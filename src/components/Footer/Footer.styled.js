import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 112px;

  padding-top: 36px;
  padding-bottom: 36px;

  margin-bottom: 110px;

  border-top: 1px solid var(--burger-hover-background-color);
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
