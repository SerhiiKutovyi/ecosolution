import { Container, FaqTitle, Question } from './Faq.styled';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import ContactUsBtn from '../Button/ContactUs/ContactUsBtn';

const Faq = () => {
  return (
    <>
      <FaqTitle>FREQUENTLY ASKED QUESTIONS</FaqTitle>
      <Container>
        <li>
          <p>
            How do wind turbines and solar panels work together in a renewable
            energy system?
          </p>
          <img src={minus} alt="minus"></img>
          {/* <span>
            Wind turbines and solar panels generate electricity through
            different mechanisms. Wind turbines harness the kinetic energy of
            the wind to turn blades, which then drive a generator. Solar panels
            convert sunlight into electricity through the photovoltaic effect.
            When integrated into a renewable energy system, these technologies
            complement each other by providing a continuous and reliable power
            supply. Wind power is often more abundant during certain times,
            while solar power is consistent during daylight hours, resulting in
            a more stable overall energy output.
          </span> */}
        </li>
        <li>
          <p>
            What sets EcoSolution's renewable energy solutions apart from others
            on the market?
          </p>
          <img src={plus} alt="plus"></img>
        </li>
        <li>
          <p>
            How can businesses and communities benefit from integrating
            renewable energy solutions from EcoSolution?
          </p>
          <img src={plus} alt="plus"></img>
        </li>
        <li>
          <p>
            What measures does EcoSolution take to ensure the environmental
            sustainability of its products?
          </p>
          <img src={plus} alt="plus"></img>
        </li>
        <li>
          <p>
            How does EcoSolution engage with local communities and support a
            just transition to renewable energy?
          </p>
          <img src={plus} alt="plus"></img>
        </li>
      </Container>
      <Question>Didn't find the answer to your question?</Question>
      <ContactUsBtn />
    </>
  );
};
export default Faq;
