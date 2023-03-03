import styled from "styled-components";

export const Container = styled.div` 
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;


export const Content = styled.div`
 max-width: 1137px;
 max-height: 600px;

 display: flex;
 flex-direction: column;
 margin-left: 123px;
 margin-right: 123px;

 > h1 {
  font-size: 36px;
  font-weight: 500;
  margin-top: 24px;
 }

 > p {
  font-size: 16px;
  margin-top: 40px;
  text-align: justify;
 }


  > header {  

    a {
     color:rgba(255, 133, 155, 1);

     margin-left: 8px;
    }

    svg {
      color: rgba(255, 133, 155, 1);
    }
  }
`;