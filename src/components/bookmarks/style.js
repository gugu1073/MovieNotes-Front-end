import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 
 
 color: rgba(148, 143, 153, 1);
 
 margin-top: 24px;
 border-radius: 10px;
 padding-right: 16px;
  
 > button {
  border: none;
  background: none;
  }
 
 > input {
   height: 56px;
   width: 100%;
   padding: 12px;
   
   color: white;
   background: transparent;

   border: none;
   margin-bottom: 40px;
  } 

  &::placeholder {
    color: rgba(148, 143, 153, 1);
  }
`;