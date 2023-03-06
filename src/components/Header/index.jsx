import {Container, Profile, Logout, Input} from './styles'

export function Header() {
  return (
  <Container>
      <Logout to='/' >
        <h1>RocketMovies</h1>
      </Logout>

      <Input 
       placeholder='Pesquisar pelo título'
       />
       

    <Profile to="/profile">

      <div>
       <strong>Gustavo Albuquerque</strong>
       <span>Sair</span>
      </div>

      <img src="https://github.com/gugu1073.png" 
      alt="user photo" />
    </Profile>

  </Container>
  );
}