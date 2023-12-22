import styled from 'styled-components';

export const BtnArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: none;

  color: var(--burger-hover-background-color);
  background-color: var(--burger-hover-background-color);
  transition: var(--animation);

  cursor: pointer;

  &:hover,
  :focus {
    color: var(--title-text-main-color);
    background-color: var(--title-text-main-color);
    transition: var(--animation);
  }

  svg {
    width: 16px;
    height: 16px;

    fill: currentColor;
    stroke: var(--modal-background);
  }

  svg:hover,
  :focus {
    stroke: var(--burger-hover-background-color);
  }
`;
