import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
  
  return (    
    <Container>  
       <Header />

       <main>
         <Content>
       <ButtonText  title="Delete Note"/> 

       <h1>Introduction React </h1>

       <p> Lorem ipsum dolor sit, 
         amet consectetur adipisicing elit. Numquam, 
         praesentium quisquam atque, unde, tempora nisi asperiores magni corporis 
         quibusdam exercitationem hic at voluptatum provident consectetur error enim! 
         Voluptatem, provident ut?</p>
        
      <Section title="useful links">
         <Links>
            <li><a href="https://github.com/gugu1073" target={top}>Github</a></li>
            <li><a href="https://www.linkedin.com/in/gustavo-albuquerque-pereira-8380a6243/" target={top}>Linkedin</a></li>
         </Links>
        </Section>

        <Section title="bookmarks">
         <Tag title=" Express "/>
         <Tag title=" Node.js "/> 
        </Section>
       
      <Button title= "Return" />
      </Content>
      </main>
    </Container>
   )

}
