import { Controller, Control } from 'react-hook-form';
import { Input } from '../Input';
import { Container } from './styles';

type InputFormProps = {
  control: Control;
  name: string;
  dafaultValue: string;
  type: string;
  placeHolder: string;
}

export function InputForm({control, name, dafaultValue, type, placeHolder}: InputFormProps) {
  return (
    <Container>
      <Controller 
        control={control}        
        defaultValue={dafaultValue}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChange={onChange}
            value={value}
            placeholder={placeHolder}
            type={type}            
          />
        )}
        name={name}
      />
    </Container>
  )
}