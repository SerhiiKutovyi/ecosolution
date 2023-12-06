import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: 1px solid rgba(151, 210, 139, 1);

  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 12.5px;

  margin-left: 12px;

  cursor: pointer;
  background-color: var(--burger-hover-background-color);

  font-family: var(--main-font);
  font-style: normal;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: var(--title-text-main-color);

  transition: var(--animation);

  &:hover,
  :focus {
    background-color: var(--title-text-main-color);
    transition: var(--animation);
    color: var(--burger-hover-background-color);

    div::before {
      background-color: var(--burger-hover-background-color);
    }
  }

  span {
    margin-right: 16px;
  }

  div {
    position: relative;

    width: 14px;
    height: 14px;

    border-radius: 50%;

    background-color: var(--title-text-main-color);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: transparent;
      transition: background-color 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
