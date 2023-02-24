import {Container} from "./style"


export function  ButtonNewMovieBlack ({title, loading= false, ...rest}) {
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