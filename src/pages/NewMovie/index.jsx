import { Header } from "../../components/Header"
import {FiArrowLeft} from "react-icons/fi"
import {Textarea} from "../../components/Textarea"
import {Bookmarks} from "../../components/bookmarks"
import {ButtonNewMovieBlack} from "../../components/ButtonNewMovieBlack"
import {ButtonNewMoviePink} from "../../components/ButtonNewMoviePink"
import {Section} from "../../components/Section"

import {Container, Form,} from "./style"
import { Link } from "react-router-dom"


export function NewMovie() {
  return (
   <Container>
    <Header/>
    <main>
      <Form>

       <header>
         <FiArrowLeft/>
        <Link to="/"
        href="">Voltar
        </Link>
        <h1>Novo filme</h1>
       </header>
        
      <div className="input">
       <div>
        <input  
        type="text" 
        placeholder="Título"
        />
       </div>

       <div>
       <input  
        type="text" 
        placeholder="Sua nota (de 0 a 5)"
        />
       </div>
      </div>
       
       <Textarea 
       placeholder='Observação'
       />
         
        <Section title="Marcadores">  
        <div className="tags">
         <Bookmarks value = "React"/>
         <Bookmarks isNew placeholder = "Novo"/>
        </div>
        </Section>
         
         
          <div className="button">
           <ButtonNewMovieBlack title= "Excluir Filmes" />
           <ButtonNewMoviePink  title= "Salvar alteração"/>
          </div>
         
      </Form>
    </main>

   </Container>
  )
}