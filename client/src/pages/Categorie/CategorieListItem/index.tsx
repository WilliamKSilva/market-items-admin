import { Container } from './styles'

type CategorieListItemProps = {
  image_url: string;
  title: string;
  price: string;
}

export function CategorieListItem({image_url, title, price}: CategorieListItemProps) {
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