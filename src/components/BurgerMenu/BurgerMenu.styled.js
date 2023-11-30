import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;

  width: 39px;
  height: 39px;

  border-radius: 50%;
  background-color: var(--burger-background-color);
  transition: var(--animation);

  &:hover,
  :focus {
    background-color: var(--burger-hover-background-color);
    transition: var(--animation);
  }

  cursor: pointer;
`;
