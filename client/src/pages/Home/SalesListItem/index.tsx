import { Container } from './styles';

export function SalesListItem() {
  return (
    <Container>
      <span>
        <p>-50%</p>
      </span>
      <div>
        <img 
          src="https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto.png" 
          alt="Blue smarthphone Galaxy A12"
        />
        <strong>SmartPhones</strong>
      </div>
    </Container>
  )
}