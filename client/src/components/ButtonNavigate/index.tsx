import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  route: string;  
}

export function ButtonNavigate({ title, route, ...rest }: ButtonProps) {
  return (
    <Link to={route}>
      <Container {...rest}>
        <strong>{title}</strong>
      </Container>
    </Link>
  )
}

