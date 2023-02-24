import {FiPlus} from 'react-icons/fi';
import {Container, Content, NewNotes } from './styles'

import {Header} from '../../components/Header'
import {Note} from '../../components/Note'
import {Input} from '../../components/input'
import {Section} from '../../components/Section'

export function Home() {
 return (
  <Container>
    <Header/>

    <Content>
      <Section title="Meus filmes">
      <Note data={{title: 'react', tags:[
        {id: '1', name: 'react' }, 
        {id: '2', name: 'rockets'}
      ]
      }}/>
      </Section>
    </Content>

    <NewNotes to="/newMovie">
      <FiPlus/>
      Adicionar filme    
    </NewNotes>
  </Container>

 );
}