import { Container, ItemImage, ItemInfo } from './styles';

interface CardSaleProps {
  title: string;
  price: string;
  image: string;
}

export function CardSale({title, price, image}: CardSaleProps) {
  return (
    <Container>
      <ItemInfo>
        <strong>{title}</strong>
        <p>{price}</p>
      </ItemInfo>
      <ItemImage src={image} alt="A tech product image."/>
    </Container>
  )
}