import styled from 'styled-components';

export const Container = styled.div`

  padding-top: 36px;
  padding-left: 12px;
  padding-right: 12px;

  background-color: var(--about-background-color);

  p{
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;

  margin-bottom: 28px;
  background-color: var(--about-background-color);
  border: unset;
  border-bottom: 1px solid green;
`;
