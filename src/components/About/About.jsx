import openness from '../../images/openness.svg';
import responsibility from '../../images/responsibility.svg';
import innovation from '../../images/innovation.svg';
import quality from '../../images/quality.svg';

import { Container, AboutText, Values } from './About.styled';

const About = () => {
  return (
    <Container>
      <h2>MAIN VALUES OF OUR COMPANY</h2>
      <AboutText>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutText>
      <ul>
        <li>
          <div>
            <img src={openness} alt="Openness"></img>
            <Values>OPENNESS</Values>
          </div>
          <p>to the world, people, new ideas and projects</p>
        </li>
        <li>
          <div>
            <img src={responsibility} alt="Responsibility"></img>
            <Values>RESPONSIBILITY</Values>
          </div>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </li>
        <li>
          <div>
            <img src={innovation} alt="Innovation"></img>
            <Values>INNOVATION</Values>
          </div>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </li>
        <li>
          <div>
            <img src={quality} alt="Quality"></img>
            <Values>QUALITY</Values>
          </div>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </li>
      </ul>
    </Container>
  );
};
export default About;
