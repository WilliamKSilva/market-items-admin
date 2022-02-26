import { InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...rest}: InputProps) {  

  return (
    <Container {...rest}/>
  )
}