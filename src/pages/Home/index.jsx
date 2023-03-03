import {FiPlus} from 'react-icons/fi';
import {Container, Content, NewNotes } from './styles'
import { Link } from "react-router-dom";

import {Header} from '../../components/Header'
import {Note} from '../../components/Note'

export function Home() {
 return (
  <Container>
   <Header/>
    
    <div>
      <h1>Meus filmes</h1>
      <NewNotes to="/newMovie">
       <FiPlus/>
        Adicionar filme    
      </NewNotes>
    </div> 

    <Content to="/details/23">
      <Note data={{title: 'Interestellar',   tags:[
       {id: '1', name: 'react' }, 
       {id: '2', name: 'rockets'}
      ]
      }}/>
    </Content>


  </Container>
 );
}