import styled from 'styled-components';

import { About } from './About/About';
import { Cases } from './Cases/Cases';
import { ContactUs } from './ContactUs/ContactUs';
import { Electricity } from './Electricity/Electricity';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

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
  width: 360px;
  
  padding-left: 20px;
  padding-right: 20px;

  background-color:yellow;
` 
  
  
