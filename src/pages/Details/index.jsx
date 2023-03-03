import { Container,  Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Link } from 'react-router-dom';

import {FiArrowLeft} from "react-icons/fi"

export function Details() {
  
  return (    
    <Container>  
       <Header />

       <main>
        <Content>
        
        <header>
         <FiArrowLeft/>
          <Link to="/"
           href="">Voltar
          </Link> 
        </header>

        <h1>Interestellar</h1>


        <p> Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data 
          desconhecida. Cooper, ex-piloto da NASA, <br /> tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
          acredita que seu quarto está assombrado por um fantasma que tenta se <br /> comunicar com ela. Pai e filha descobrem 
          que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de <br /> 
          radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA 
          liderada pelo professor John Brand. <br /> O cientista revela que um buraco de minhoca foi aberto perto de Saturno e 
          que ele leva a planetas que podem oferecer condições de sobrevivência <br /> para a espécie humana. As "missões Lázaro" 
          enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro <br /> Gargântua: Miller,
          Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave <br />
          espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
          para ele na instalação <br /> da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. <br /> <br />
          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista 
          Romilly, o físico planetário Doyle, além dos <br /> robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem 
          a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional <br /> temporal por estar tão perto de 
          Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é 
          inóspito <br /> já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação 
          enquanto Amelia tenta recuperar os dados de <br /> Miller, matando Doyle e atrasando a partida. Ao voltarem para a 
          Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
        </p>

        <Section>
         <Tag title=" Express "/>
         <Tag title=" Node.js "/> 
         </Section>

      </Content>
      </main>
    </Container>
   )

}
