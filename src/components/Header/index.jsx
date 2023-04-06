import {Container, Profile, Logout, Input} from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'
import {useAuth} from '../../hooks/auth'

export function Header() {
  const {signOut, user  } = useAuth();
 
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
  <Container>
      <Logout to='/' >
        <h1>RocketMovies</h1>
      </Logout>

      <Input 
       placeholder='Pesquisar pelo título'
       />
       
      <div>
       <strong>{user.name}</strong>
       <span onClick={signOut}>Sair</span>
      </div>

    <Profile to="/profile">
      <img 
       src={avatarUrl} 
       alt={user.name}
      />
    </Profile>

  </Container>
  );
}