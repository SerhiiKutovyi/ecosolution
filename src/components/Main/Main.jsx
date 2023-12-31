import MainBtn from '../Button/MainBtn/Button';

import { Container, Img, Wrapper, Eco, Development } from './Main.styled';
import mask from '../../images/wind-turbine-clean-energy.jpg';

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <h1 id="main">RENEWABLE ENERGY FOR ANY TASK</h1>
        <div>
          <Development>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Development>
          <MainBtn target="cases" />
        </div>
      </Wrapper>

      <ul>
        <li>
          <a href="79005, Ukraine, Lvivstreet. Shota Rustaveli, 7">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </li>
        <li>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        </li>
        <li>
          <Eco>ecosolution © 2023</Eco>
        </li>
      </ul>

      <Img src={mask} alt="mask" />
    </Container>
  );
};

export default Main;
