import About from '../About/About';
import Cases from '../Cases/Cases';
import ContactUs from '../ContactUs/ContactUs';
import Electricity from '../Electricity/Electricity';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Faq from '../Faq/Faq';

import { Container } from './App.styled';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
        <Footer />
      </Container>
    </>
  );
};

export default App;
