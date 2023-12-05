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

export const Modal = styled.div`
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 24px;

  background: rgba(23, 61, 51, 0.25);
`;

export const ModalContent = styled.div`
  width: 320px;

  padding: 20px;
  border-radius: 8px;
  background: #173d33 75%;

  button {
    cursor: pointer;
    border: unset;

    margin-bottom: 8px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 24px;
    line-height: calc(28.8 / 24);
    color: var(--white-color);

    background: var(--modal-background);

    &:hover,
    :focus {
      background-color: var(--title-text-main-color);
      transition: var(--animation);
      color: var(--burger-hover-background-color);
    }
  }

  ul {
    border-top: 1px solid var(--white-color);
    padding-top: 24px;
  }

  p {
    margin-bottom: 8px;

    font-family: var(--main-font);
    font-style: normal;
    font-size: 24px;
    line-height: calc(28.8 / 24);

    color: var(--white-color);
  }
`;

export const IconBox = styled.li`
  margin-top: 395px;

  display: flex;
  gap: 8px;
`;

export const SvgFacebook = styled.svg`
  cursor: pointer;

  width: 24px;
  height: 24px;
  fill: white;
`;

export const SvgInstagram = styled.svg`
  cursor: pointer;

  width: 24px;
  height: 24px;
  fill: var(--modal-background);
  stroke: white;
`;
