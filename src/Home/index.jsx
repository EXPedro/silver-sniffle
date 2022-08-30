import { Header, SiteContainer, MarvelLogo } from './styles';
import Logo from '../assets/marvel.svg';
import { Card } from '../components';

const Home = (() => {
  return (
    <>
      <Header>
        <MarvelLogo src={Logo} alt="Logo" />
      </Header>
      <SiteContainer>
        <Card />
      </SiteContainer>
    </>
    );
});

export default Home;