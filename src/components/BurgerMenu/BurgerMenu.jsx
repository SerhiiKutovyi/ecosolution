import { useState } from 'react';

import icon from '../../images/icon.svg';

import {
  Wrapper,
  Modal,
  ModalContent,
  SvgInstagram,
  SvgFacebook,
  IconBox,
  LinkStyle,
} from './BurgerMenu.styled';

const BurgerMenu = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Wrapper onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          height="16px"
          viewBox="0 0 12 12"
        >
          <g fill="#1D1D1B">
            <path d="M.5 5.5h11v1H.5zM.5 2.5h11v1H.5zM.5 8.5h11v1H.5z" />
          </g>
        </svg>
      </Wrapper>
      {modal && (
        <Modal>
          <ModalContent>
            <button onClick={closeModal}>X close</button>
            <ul>
              <li>
                <LinkStyle
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1000}
                >
                  Main
                </LinkStyle>
              </li>
              <li>
                <LinkStyle
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1000}
                >
                  About
                </LinkStyle>
              </li>
              <li>
                <LinkStyle
                  to="cases"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1000}
                >
                  Cases
                </LinkStyle>
              </li>
              <li>
                <LinkStyle
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1000}
                >
                  FAQ
                </LinkStyle>
              </li>
              <li>
                <LinkStyle
                  to="contactUs"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1000}
                >
                  Contact Us
                </LinkStyle>
              </li>
              <IconBox>
                <a
                  href="https://uk-ua.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgFacebook>
                    <use href={icon + '#icon-facebook'}></use>
                  </SvgFacebook>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgInstagram>
                    <use href={icon + '#icon-instagram'}></use>
                  </SvgInstagram>
                </a>
              </IconBox>
            </ul>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BurgerMenu;
