import {Header, SiteContainer, MarvelLogo} from './styles';
import Logo from '../assets/marvel.svg';

const Home = (() => {
    return (
        <>
            <Header>
                <MarvelLogo src={Logo} alt="Logo" />
            </Header>
            <SiteContainer>brbry</SiteContainer>
        </>
    );
});

export default Home;