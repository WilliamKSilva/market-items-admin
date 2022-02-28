import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;  
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <strong>{title}</strong>
    </Container>
  )
}

