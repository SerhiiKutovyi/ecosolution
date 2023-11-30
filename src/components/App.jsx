import styled from 'styled-components';

import About from './About/About';
import Cases from './Cases/Cases';
import ContactUs from './ContactUs/ContactUs';
import Electricity from './Electricity/Electricity';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  width: 360px;

  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 480px) {
    background-color: var(--layout-background-color);
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
