import { Card, CharacterName, Thumbnail } from './styles';

const MarvelCard = (() => {
  return(
    <>
      <Card >
        <Thumbnail src='http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' alt='Imagem'/>
        <CharacterName>3-D Man</CharacterName>
      </Card>
      <Card />
      <Card />
      <Card />
    </>
  );
});

export default MarvelCard;