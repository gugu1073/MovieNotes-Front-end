import {Container} from "./style"


export function  ButtonNewMoviePink ({title, loading= false, ...rest}) {
  return (
    <Container 
    type='button'
    disabled={loading}
    {...rest}
    >
      {loading ? 'Voltar' : title}
    </Container>
  );
}