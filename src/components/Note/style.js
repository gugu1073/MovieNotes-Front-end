import styled from "styled-components";


export const Container = styled.button`
 width: 1195px;
 background-color:rgba(255, 133, 155, 0.05);

 border: none;
 border-radius: 10px;
 padding: 22px;
 margin-bottom: 16px;
 
 display: block;
 margin-left: 150px;
 cursor: pointer;

 > h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color:${({theme})  => theme.COLORS.WHITE};
 }

  > p {
    font-size: 16px;
    color: rgba(153, 149, 145, 1);
    font-weight: 400;

    text-align: left;
  }
 
 > svg {
  margin-right: 1065px;
  margin-top: 8px;
 }

 > footer {
  display: flex;
  margin-top: 24px;

  width: 100%;
 }
`;