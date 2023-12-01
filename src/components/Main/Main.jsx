import MainBtn from '../Button/MainBtn/Button';

import { Container, Img } from './Main.styled';
import mask from '../../images/mask.jpg';

const Main = () => {
  return (
    <Container>
      <div>
        <h1>RENEWABLE ENERGY FOR ANY TASK</h1>
        <p>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <MainBtn />
      </div>

      <ul>
        <li>
          <a href="79005, Ukraine, Lvivstreet. Shota Rustaveli, 7">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </li>
        <li>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        </li>
      </ul>

      <Img src={mask} alt="mask" />
    </Container>
  );
};

export default Main;
