import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 240px;  /*9:6*/
  height: 360px;
  /*background-color: lightgoldenrodyellow;*/
  background-color: white;
  margin-right: 16px;
  position: relative;
  z-index: 0;
  padding: 8px;

  &:after{
    content: '';
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-top: 30px solid white;
    border-right: 30px solid black;
    z-index: -1;
  }
`;

export const Thumbnail = styled.img`
  width: 224px;
  height: 240px;
  border-radius: 6px;
`;

export const CharacterName =  styled.h2`
  font-family: 'Roboto, sans-serif';
  font-size: 1.25em;
  margin-top: 8px;
  font-weight: bold;
`;