import { Button } from '../Button';
import { Background, Container, WrapperButton } from './styles';

type ModalProps = {  
  message: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function Modal({message, setOpenModal}: ModalProps) {  

  return (
    <Background>
      <Container>
        <h1>Ocorreu um erro!</h1>
        <p>{message}</p>
        <WrapperButton>
          <Button title="OK" onClick={() => setOpenModal(false)}/>
        </WrapperButton>        
      </Container>
    </Background>
  )
}