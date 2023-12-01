import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

import { Container } from './Header.styled';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <Container>
     <img src={logo} alt="Logo"></img> 
      <BurgerMenu />
    </Container>
  );
};
export default Header;
