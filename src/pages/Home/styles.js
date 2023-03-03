import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 
 background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

 > div {
  display: flex;
  justify-content: space-between;
  margin-right: 190px;
  margin-top: 50px;
  margin-left: 152px;
 }
`;

export const Content =   styled.div`
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
