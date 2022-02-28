import { ButtonNavigate } from '../ButtonNavigate';
import { Background, Container, WrapperButton } from './styles';

type ModalProps = {  
  message: string;
  route: string;  
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function ModalNavigate({message, route, setOpenModal}: ModalProps) {  

  return (
    <Background>
      <Container>
        <h1>Error!</h1>
        <p>{message}</p>
        <WrapperButton>
          <ButtonNavigate title="OK" onClick={() => setOpenModal(false)} route={route} />
        </WrapperButton>        
      </Container>
    </Background>
  )
}