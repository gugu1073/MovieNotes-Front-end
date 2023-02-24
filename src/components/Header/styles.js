import styled from "styled-components";


export const Container = styled.header`
 grid-area: header;
 
 height: 105px;
 width: 100%;

 border-bottom-width: 1px;
 border-bottom-style: solid;
 border-bottom-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700};

 display: flex;
 justify-content: space-between;

 padding: 0 80px;
`;

export const Input = styled.input`
 height: 56px ;
 width: 630px;
 display: flex;
 align-items: center;

 background-color: rgba(38, 37, 41, 1);

 border-radius: 10px;
 border: 0; 
 margin-top: 25px;
 margin-left: 64px;
 margin-right: 64px;
 padding-left: 24px;
 color: white;

  &::placeholder { 
   color: ${({theme}) => theme.COLORS.GRAY_300};
   padding-left: 24px;
  }
`;

export const Profile = styled.div`
 display: flex;
 align-items: center;
 margin-right: 123px;
 

 > img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-left: 9px;
 }

 > div {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;
 }

 span {
   font-size: 14px;
   color: #948F99;
   text-align: right;

   cursor: pointer;
  }

 strong {
  font-size: 16px;
  color: ${( { theme } ) => theme.COLORS.WHITE };
 }
`;

export const Logout = styled.button`
 border: none;
 background: none;
 cursor: pointer;

 > h1 {
  font-size: 24px;
  color: rgba(255, 133, 155, 1);
  margin-left: 70px;
 }
`;