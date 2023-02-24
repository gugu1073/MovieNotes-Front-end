import { Container } from "./styles";

export function Button({title,  loading= false, ...rest}) {
  return (
    <Container 
    type='button'
    isActive={isActive}
    disabled={loading}
    {...rest}
    >
      {loading ? 'Voltar' : title}
    </Container>
  );
}