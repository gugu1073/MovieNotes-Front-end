import {FiPlus, FiSearch} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNotes } from './styles'

import {Header} from '../../components/Header'
import {Note} from '../../components/Note'
import {Input} from '../../components/input'
import {Section} from '../../components/Section'
import {ButtonText} from '../../components/ButtonText'

export function Home() {
 return (
  <Container>
    <Brand>
     <h1>RocketNotes</h1>
    </Brand>

    <Header/>

    <Menu>
      <li><ButtonText title="All" isActive /></li>
      <li><ButtonText title="React"/></li>
      <li><ButtonText title="Node"/></li>
    </Menu>

    <Search>
     <Input placeholder="Search for title" icon={FiSearch}/>   
    </Search>

    <Content>
      <Section title="Minhas notas">
      <Note data={{title: 'react', tags:[
        {id: '1', name: 'react' }, 
        {id: '2', name: 'rockets'}
      ]
      }}/>
      </Section>
    </Content>

    <NewNotes>
      <FiPlus/>
      Create Note    
    </NewNotes>
  </Container>

 );
}