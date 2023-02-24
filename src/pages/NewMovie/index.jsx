import {Container, Form,} from "./style"
import { Header } from "../../components/Header"
import {FiArrowLeft} from "react-icons/fi"
import {Textarea} from "../../components/Textarea"
import {Bookmarks} from "../../components/bookmarks"
import {ButtonNewMovieBlack} from "../../components/ButtonNewMovieBlack"
import {ButtonNewMoviePink} from "../../components/ButtonNewMoviePink"


export function NewMovie() {
  return (
   <Container>
    <Header/>
    <main>
      <Form>

       <header>
         <FiArrowLeft/>
        <a 
        href="">Voltar
        </a>
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
         <h3>Marcadores</h3>
         
        <section>  
        <div className="tags">
         <Bookmarks value = "React"/>
         <Bookmarks isNew placeholder = "Novo marcador"/>
        </div>
        </section>
         
         <section>
          <div className="button">
           <ButtonNewMovieBlack title= "Excluir Filmes"/>
           <ButtonNewMoviePink  title= "Salvar alteração"/>
          </div>
         </section>
      </Form>
    </main>

   </Container>
  )
}