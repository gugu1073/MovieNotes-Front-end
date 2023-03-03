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

 > div {
  font-size: 24px;
  font-weight: 500;
  margin-top: 24px;

  display: flex;
  gap: 10px;

  svg {
    margin-top: 25px;
  }
 }

 > p {
  font-size: 16px;
  margin-top: 40px;
  text-align: justify;

  margin-bottom: -15px;
 }


  > header {  
      margin-top: -30px;
    a {
     color:rgba(255, 133, 155, 1);

     margin-left: 8px;
    }

    svg {
      color: rgba(255, 133, 155, 1);
    }
  }


  > .information {
    
     
    img {
      width: 16px;
      height: 16px;

      margin-top: 3px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: rgba(244, 237, 232, 1);
    }

    svg {
      color: rgba(255, 133, 155, 1);
      margin-top: 1px;
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
`;