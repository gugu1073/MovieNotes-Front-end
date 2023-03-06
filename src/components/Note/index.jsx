import {Container} from './style'
import {Tag} from '../../components/Tag'

export function Note( {data , ...rest}) {
 return(
   <Container {...rest}>
      <h1>{data.title} </h1>
      <svg width="84" height="13" viewBox="0 0 84 13" fill="none" xmlns="http://www.w3.org/2000/svg"> 
       <path d="M9.2344 11.9191C9.15547 11.9195 9.07845 11.8948 9.01432 11.8488L6.00002 9.66352L2.98572 11.8488C2.92133 11.8955 2.84374 11.9206 2.76419 11.9203C2.68464 11.92 2.60723 11.8944 2.54318 11.8472C2.47912 11.8 2.43173 11.7337 2.40785 11.6578C2.38396 11.582 2.38484 11.5004 2.41033 11.4251L3.58596 7.94298L0.539084 5.85352C0.473087 5.80831 0.423276 5.74318 0.396929 5.66765C0.370582 5.59212 0.36908 5.51014 0.392643 5.43369C0.416206 5.35724 0.463598 5.29033 0.527895 5.24274C0.592193 5.19514 0.670025 5.16936 0.750022 5.16915H4.50893L5.6433 1.67813C5.66774 1.60276 5.71542 1.53707 5.77951 1.49048C5.84359 1.44388 5.92079 1.41879 6.00002 1.41879C6.07925 1.41879 6.15645 1.44388 6.22054 1.49048C6.28462 1.53707 6.3323 1.60276 6.35674 1.67813L7.49112 5.17032H11.25C11.3301 5.17028 11.4081 5.19589 11.4726 5.24339C11.5371 5.29089 11.5847 5.3578 11.6084 5.4343C11.6321 5.51081 11.6307 5.5929 11.6044 5.66855C11.5781 5.74419 11.5282 5.80943 11.4621 5.85469L8.41408 7.94298L9.58901 11.4241C9.60804 11.4805 9.6134 11.5406 9.60463 11.5994C9.59586 11.6583 9.57322 11.7142 9.53857 11.7625C9.50393 11.8109 9.45827 11.8503 9.40539 11.8776C9.3525 11.9048 9.29389 11.919 9.2344 11.9191Z" fill="#FF859B"/>
       <path d="M45.2344 11.9191C45.1555 11.9195 45.0785 11.8948 45.0143 11.8488L42.0001 9.66352L38.9858 11.8488C38.9214 11.8955 38.8438 11.9206 38.7642 11.9203C38.6847 11.92 38.6073 11.8944 38.5432 11.8472C38.4792 11.8 38.4318 11.7337 38.4079 11.6578C38.384 11.582 38.3849 11.5004 38.4104 11.4251L39.586 7.94298L36.5391 5.85352C36.4731 5.80831 36.4233 5.74318 36.397 5.66765C36.3706 5.59212 36.3691 5.51014 36.3927 5.43369C36.4162 5.35724 36.4636 5.29033 36.5279 5.24274C36.5922 5.19514 36.6701 5.16936 36.7501 5.16915H40.509L41.6433 1.67813C41.6678 1.60276 41.7155 1.53707 41.7795 1.49048C41.8436 1.44388 41.9208 1.41879 42.0001 1.41879C42.0793 1.41879 42.1565 1.44388 42.2206 1.49048C42.2847 1.53707 42.3323 1.60276 42.3568 1.67813L43.4911 5.17032H47.2501C47.3301 5.17028 47.4082 5.19589 47.4726 5.24339C47.5371 5.29089 47.5847 5.3578 47.6084 5.4343C47.6321 5.51081 47.6307 5.5929 47.6044 5.66855C47.5781 5.74419 47.5282 5.80943 47.4622 5.85469L44.4141 7.94298L45.589 11.4241C45.6081 11.4805 45.6134 11.5406 45.6047 11.5994C45.5959 11.6583 45.5732 11.7142 45.5386 11.7625C45.504 11.8109 45.4583 11.8503 45.4054 11.8776C45.3525 11.9048 45.2939 11.919 45.2344 11.9191Z" fill="#FF859B"/>
       <path d="M63.2344 11.9191C63.1555 11.9195 63.0785 11.8948 63.0143 11.8488L60.0001 9.66352L56.9858 11.8488C56.9214 11.8955 56.8438 11.9206 56.7642 11.9203C56.6847 11.92 56.6073 11.8944 56.5432 11.8472C56.4792 11.8 56.4318 11.7337 56.4079 11.6578C56.384 11.582 56.3849 11.5004 56.4104 11.4251L57.586 7.94298L54.5391 5.85352C54.4731 5.80831 54.4233 5.74318 54.397 5.66765C54.3706 5.59212 54.3691 5.51014 54.3927 5.43369C54.4162 5.35724 54.4636 5.29033 54.5279 5.24274C54.5922 5.19514 54.6701 5.16936 54.7501 5.16915H58.509L59.6433 1.67813C59.6678 1.60276 59.7155 1.53707 59.7795 1.49048C59.8436 1.44388 59.9208 1.41879 60.0001 1.41879C60.0793 1.41879 60.1565 1.44388 60.2206 1.49048C60.2847 1.53707 60.3323 1.60276 60.3568 1.67813L61.4911 5.17032H65.2501C65.3301 5.17028 65.4082 5.19589 65.4726 5.24339C65.5371 5.29089 65.5847 5.3578 65.6084 5.4343C65.6321 5.51081 65.6307 5.5929 65.6044 5.66855C65.5781 5.74419 65.5282 5.80943 65.4622 5.85469L62.4141 7.94298L63.589 11.4241C63.6081 11.4805 63.6134 11.5406 63.6047 11.5994C63.5959 11.6583 63.5732 11.7142 63.5386 11.7625C63.504 11.8109 63.4583 11.8503 63.4054 11.8776C63.3525 11.9048 63.2939 11.919 63.2344 11.9191Z" fill="#FF859B"/>
       <path d="M27.2344 11.9191C27.1555 11.9195 27.0785 11.8948 27.0143 11.8488L24.0001 9.66352L20.9858 11.8488C20.9214 11.8955 20.8438 11.9206 20.7642 11.9203C20.6847 11.92 20.6073 11.8944 20.5432 11.8472C20.4792 11.8 20.4318 11.7337 20.4079 11.6578C20.384 11.582 20.3849 11.5004 20.4104 11.4251L21.586 7.94298L18.5391 5.85352C18.4731 5.80831 18.4233 5.74318 18.397 5.66765C18.3706 5.59212 18.3691 5.51014 18.3927 5.43369C18.4162 5.35724 18.4636 5.29033 18.5279 5.24274C18.5922 5.19514 18.6701 5.16936 18.7501 5.16915H22.509L23.6433 1.67813C23.6678 1.60276 23.7155 1.53707 23.7795 1.49048C23.8436 1.44388 23.9208 1.41879 24.0001 1.41879C24.0793 1.41879 24.1565 1.44388 24.2206 1.49048C24.2847 1.53707 24.3323 1.60276 24.3568 1.67813L25.4911 5.17032H29.2501C29.3301 5.17028 29.4082 5.19589 29.4726 5.24339C29.5371 5.29089 29.5847 5.3578 29.6084 5.4343C29.6321 5.51081 29.6307 5.5929 29.6044 5.66855C29.5781 5.74419 29.5282 5.80943 29.4622 5.85469L26.4141 7.94298L27.589 11.4241C27.6081 11.4805 27.6134 11.5406 27.6047 11.5994C27.5959 11.6583 27.5732 11.7142 27.5386 11.7625C27.504 11.8109 27.4583 11.8503 27.4054 11.8776C27.3525 11.9048 27.2939 11.919 27.2344 11.9191Z" fill="#FF859B"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M78 1.41898C78.1624 1.41898 78.3064 1.52357 78.3566 1.67807L79.4911 5.16898H83.25C83.4143 5.16898 83.5595 5.27599 83.6082 5.43296C83.6568 5.58994 83.5976 5.76031 83.462 5.85325L80.4147 7.94283L81.5897 11.4241C81.6418 11.5786 81.5881 11.7492 81.4567 11.846C81.3253 11.9427 81.1464 11.9434 81.0143 11.8476L78 9.66333L74.9856 11.8476C74.8535 11.9434 74.6747 11.9427 74.5433 11.846C74.4119 11.7492 74.3581 11.5786 74.4103 11.4241L75.5852 7.94283L72.5379 5.85325C72.4024 5.76031 72.3431 5.58994 72.3918 5.43296C72.4404 5.27599 72.5856 5.16898 72.75 5.16898H76.5088L77.6433 1.67807C77.6935 1.52357 77.8375 1.41898 78 1.41898ZM78 3.00723L77.1379 5.65988C77.0876 5.81438 76.9437 5.91898 76.7812 5.91898H73.9599L76.2433 7.4847C76.3817 7.5796 76.4402 7.7549 76.3865 7.91389L75.4964 10.5513L77.7799 8.89657C77.9112 8.80144 78.0887 8.80144 78.22 8.89657L80.5035 10.5513L79.6134 7.91389C79.5597 7.7549 79.6182 7.5796 79.7566 7.4847L82.04 5.91898H79.2187C79.0563 5.91898 78.9123 5.81438 78.8621 5.65988L78 3.00723Z" fill="#FF859B"/>
      </svg>
      
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, 
        <br /> tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
      </p>
     {
       data.tags &&
       <footer>
       {
        data.tags.map(tag => 
        <Tag 
        key={tag.id} 
        title={tag.name}
        />) 
       }
       </footer>
      }
    </Container>
  )
}