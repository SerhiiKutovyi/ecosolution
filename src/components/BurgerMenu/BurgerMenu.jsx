import { Wrapper } from "./BurgerMenu.styled";


const BurgerMenu = () => {
  return (
    <Wrapper>
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
  );
};

export default BurgerMenu;