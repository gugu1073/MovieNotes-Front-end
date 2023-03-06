import {FiPlus} from 'react-icons/fi';
import {Container, Content, NewNotes } from './styles'

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
      
      <Note data={{title: 'Interestellar',    tags:[
       {id: '1', name: 'Ficção Científica' }, 
       {id: '2', name: 'Drama'},
       {id: '3', name: 'Família'}
      ]
      }} 
      />

      <Note data={{title: 'Interestellar',    tags:[
       {id: '1', name: 'Ficção Científica' }, 
       {id: '2', name: 'Drama'},
       {id: '3', name: 'Família'}
      ]
      }} 
      />

      <Note data={{title: 'Interestellar',    tags:[
       {id: '1', name: 'Ficção Científica' }, 
       {id: '2', name: 'Drama'},
       {id: '3', name: 'Família'}
      ]
      }} 
      />
 
    </Content>

  </Container>
 );
}