import styled from 'styled-components';


export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: 1px solid rgba(151, 210, 139, 1);

  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 4px;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;

  cursor: pointer;
  background-color: var(--layout-background-color);

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
  }

  span {
    margin-right: 16px;
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;
