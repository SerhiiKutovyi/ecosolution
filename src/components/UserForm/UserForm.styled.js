import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 36px;

  padding-top: 36px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 36px;

  background-color: var(--about-background-color);

  p {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  margin-bottom: 28px;
  background-color: var(--about-background-color);
  border: unset;
  border-bottom: 1px solid var(--burger-hover-background-color);
`;

export const InputMessage = styled.textarea`
  width: 100%;
  height: 174px;

  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px;

  margin-bottom: 16px;

  border: unset;
  border-bottom: 1px solid var(--burger-hover-background-color);

  font-family: var(--main-font);
  font-style: normal;
  font-size: 18px;
  line-height: calc(21.6 / 18);

  background-color: var(--about-background-color);
`;
