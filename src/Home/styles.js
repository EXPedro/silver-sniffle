import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  height: ${(props) => props.theme.sizes.headerHeight};
`;

export const MarvelLogo = styled.img`
  width: auto;
  height: calc(${(props) => props.theme.sizes.headerHeight} - 1vh);
`;

export const SiteContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100vw;
  height: calc(100vh - ${(props) => props.theme.sizes.headerHeight});
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.sizes.text};
  padding: 16px;
`;

export const Body = styled.body`
  overflow: hidden;
`;