import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 align-items: center;
 height: 56px;
 
 margin-top: 16px;
 margin-left: 16px;
 
 background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
 color: ${({theme}) => theme.COLORS.GRAY_300};

 border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
 margin-bottom: 8px;

 color: rgba(148, 143, 153, 1);
 
 border-radius: 10px;
 padding-right: 16px;
  
 > button {
  border: none;
  background: none;
  }
 
 > input {
   width: 100px; 
   gap: 40px;
   text-align: center;
   color: white;
   background: transparent;
      
   border: none;  
  } 

   svg {
    color: rgba(255, 133, 155, 1);
    cursor: pointer;
  }

  &::placeholder {
    color: rgba(148, 143, 153, 1);
  }
`;