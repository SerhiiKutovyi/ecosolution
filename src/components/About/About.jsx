import openness from '../../images/openness.svg';
import responsibility from '../../images/responsibility.svg';
import innovation from '../../images/innovation.svg';
import quality from '../../images/quality.svg';
import group from '../../images/group.jpg';
import windFarm from '../../images/wind-farms.jpg';

import {
  Container,
  AboutText,
  Values,
  Wrapper,
  GreenLine,
  AboutGrid,
  AboutImg,
  AboutCards,
} from './About.styled';

const About = () => {
  return (
    <Container>
      <Wrapper>
        <h2>MAIN VALUES OF OUR COMPANY</h2>
        <GreenLine></GreenLine>
        <AboutText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </AboutText>
      </Wrapper>

      <ul>
        <li>
          <AboutCards>
            <AboutGrid>
              <img src={openness} alt="Openness"></img>
              <Values>OPENNESS</Values>
            </AboutGrid>
            <p>to the world, people, new ideas and projects</p>
          </AboutCards>

          <AboutCards>
            <AboutGrid>
              <img src={responsibility} alt="Responsibility"></img>
              <Values>RESPONSIBILITY</Values>
            </AboutGrid>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </AboutCards>

          <AboutImg>
            <img src={group} alt="Group"></img>
          </AboutImg>
        </li>
        <li>
          <AboutImg>
            <img src={windFarm} alt="Wind-farm"></img>
          </AboutImg>

          <AboutCards>
            <AboutGrid>
              <img src={innovation} alt="Innovation"></img>
              <Values>INNOVATION</Values>
            </AboutGrid>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </AboutCards>

          <AboutCards>
            <AboutGrid>
              <img src={quality} alt="Quality"></img>
              <Values>QUALITY</Values>
            </AboutGrid>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </AboutCards>
        </li>
      </ul>
    </Container>
  );
};
export default About;
