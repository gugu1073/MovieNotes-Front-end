import styled from "styled-components";


export const Container = styled.button`
 width: 1195px;
 background-color:rgba(255, 133, 155, 0.05);

 border: none;
 border-radius: 10px;
 padding: 22px;
 margin-bottom: 16px;
 
 cursor: pointer;

 > h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color:${({theme})  => theme.COLORS.WHITE} ;
 }

 > footer {
  display: flex;
  margin-top: 24px;

  width: 100%;
 }
`;