import { useEffect, useState } from 'react';
import { StyleSheetManager } from 'styled-components';

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import GetInTouch from '../Button/GetInTouch/GetInTouch';

import { Container } from './Header.styled';
import logo from '../../images/logo.png';

const Header = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY > 0;

      setColor(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'headerColor'}>
      <Container headerColor={color}>
        <img src={logo} alt="Logo"></img>
        <BurgerMenu />
        <GetInTouch target="contactUs" />
      </Container>
    </StyleSheetManager>
  );
};
export default Header;
