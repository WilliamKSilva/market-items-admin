import { Container } from './styles'

type CardProductProps = {
  image_url: string;
  title: string;
  price: string;
}

export function CardProduct({image_url, title, price}: CardProductProps) {
  return (
    <Container>
      <img src={image_url} alt="A tech product image"/>
      <section>
        <h1>{title}</h1>
        <span>USD {price}</span>
      </section>
    </Container>
  )
}