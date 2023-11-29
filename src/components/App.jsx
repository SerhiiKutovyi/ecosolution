import { About } from './About/About';
import { Cases } from './Cases/Cases';
import { ContactUs } from './ContactUs/ContactUs';
import { Electricity } from './Electricity/Electricity';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <ContactUs />
      <Footer />
    </>
  );
};

export { App };
