import MainBtn from '../Button/MainBtn/Button';

import { Container, Img } from './Main.styled';
import mask from '../../images/mask.jpg';

const Main = () => {
  return (
    <Container>
      <h1>RENEWABLE ENERGY FOR ANY TASK</h1>
      <p>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <MainBtn />
      <div>
        <nav></nav>
      </div>
      <Img src={mask} alt="mask" />
    </Container>
  );
};

export default Main;
