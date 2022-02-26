import { Controller, Control } from 'react-hook-form';
import { Input } from '../Input';
import { Container } from './styles';

type InputFormProps = {
  control: Control;
  name: string;
  dafaultValue: string;
  placeHolder: string;
}

export function InputForm({control, name, dafaultValue, placeHolder}: InputFormProps) {
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
          />
        )}
        name={name}
      />
    </Container>
  )
}