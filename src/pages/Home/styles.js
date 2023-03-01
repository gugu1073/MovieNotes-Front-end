import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 width: 100%;
 height: 100vh;


 background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

 > div {
  display: flex;
  justify-content: space-between;
  margin-left: 123px;
  margin-right: 123px;
  margin-top: 50px;
 }
`;

export const Brand =   styled.div` 
 display: flex;
 justify-content: center;
 align-items: center;

 border-bottom-width: 1px;
 border-bottom-style: solid;
 border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
 
 background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

 >h1 {
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.ORANGE};
 }
`;

export const Content =   styled.div`
 grid-area: content;
 padding: 0 64px;
 overflow-y: auto;
`;

export const NewNotes =  styled(Link)`

 background-color: ${({theme}) => theme.COLORS.ORANGE};
 color: rgba(28, 27, 30, 1);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 207px;
 height: 48px ;
 border-radius: 10px;

 border: none;
 cursor: pointer;

 svg {
  margin-right: 8px;
 }
`;
