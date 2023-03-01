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

    <Content>
      <Note data={{title: 'react', tags:[
        {id: '1', name: 'react' }, 
        {id: '2', name: 'rockets'}
      ]
      }}/>
    </Content>

  </Container>
 );
}