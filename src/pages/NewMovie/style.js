import styled from "styled-components";


export const Container = styled.div `
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 105px auto;
 grid-template-areas: 
 "header"
 "content" ;
`

export const Form = styled.form`
  max-width: 550px;
  margin: 150px ;
  margin-top: 40px;

  > header {
    margin-bottom: 40px;
   h1{
    margin-top: 24px;
   }

   a{
    color: #FF859B;
   }
   
   svg {
    color: #FF859B;
    margin-right: 8px;
   }
   
  }
  
 > div input {
  height: 56px;
  width: 550px;
  padding: 12px;
  margin-top: 20px;
  
  color: ${({theme}) => theme.COLORS.WHITE};
  background: transparent;
  border: 0;
  border-radius: 10px;
  background-color: #262529;
  
  &::placeholder { 
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
}

> .input {
  display: flex;
  gap: 40px;
 }

`;

