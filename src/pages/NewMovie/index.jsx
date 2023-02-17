import {Container, Form,} from "./style"
import { Header } from "../../components/Header"
import {FiArrowLeft} from "react-icons/fi"
import {Textarea} from "../../components/Textarea"

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
       
      </Form>
    </main>

   </Container>
  )
}