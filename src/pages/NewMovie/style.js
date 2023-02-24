import styled from "styled-components";


export const Container = styled.div `
 width: 100%;
 height: 100vh;

 display: grid;
 grid-template-rows: 105px auto;
 grid-template-areas: 
 "header"
 "content" ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  background-color: rgba(13, 12, 15, 1);
  height: 90px;
  width: 1146px;
  border-radius: 10px;
  margin-top: 24px;
 }

 .button {
  display: inline-flex;

  gap: 75px;
   
  
  margin-top: 45px;
 }

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

 >h3 {
  color: rgba(153, 149, 145, 1);
  margin-top: 40px;
 }
`;