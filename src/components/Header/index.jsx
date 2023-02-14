import {RiShutDownLine} from 'react-icons/ri'

import {Container, Profile, Logout} from './styles'


export function Header() {
  return (
  <Container>
   <Profile>
      <img src="https://github.com/gugu1073.png" 
      alt="user photo" />
     
      <div>
       <span>Welcome</span>
       <strong>Gustavo Albuquerque</strong>
      </div>
    </Profile>

    <Logout>
      <RiShutDownLine/>
    </Logout>
  </Container>
  );
}