import {Container} from "./style"
import { Header } from "../../components/Header"
import {ButtonText} from "../../components/ButtonText"
import {FiArrowLeft} from "react-icons/fi"

export function NewMovie() {
  return (
   <Container>
    <Header/>
      <FiArrowLeft/>
      <ButtonText
      title = "Voltar"
      />
    <main>
      <Form>
       <header>
        <h1>Novo Filme</h1>
       </header>
       
       
      </Form>
    </main>

   </Container>
  )
}