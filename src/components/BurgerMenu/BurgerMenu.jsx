import { useState } from 'react';
import { Wrapper, Modal, ModalContent } from './BurgerMenu.styled';

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
            <button onClick={closeModal}>x close</button>
            <ul>
              <li>
                <p>Main</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Cases</p>
              </li>
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li></li>
            </ul>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BurgerMenu;
