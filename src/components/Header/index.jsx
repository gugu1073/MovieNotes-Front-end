import {Container, Profile, Logout, Input} from './styles'

import {useAuth} from '../../hooks/auth'

export function Header() {
  const {signOut} = useAuth();
  return (
  <Container>
      <Logout to='/' >
        <h1>RocketMovies</h1>
      </Logout>

      <Input 
       placeholder='Pesquisar pelo título'
       />
       
      <div>
       <strong>Gustavo Albuquerque</strong>
       <span onClick={signOut}>Sair</span>
      </div>

    <Profile to="/profile">

      <img src="https://github.com/gugu1073.png" 
      alt="user photo" />
    </Profile>

  </Container>
  );
}