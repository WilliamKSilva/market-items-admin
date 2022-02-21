import { Container } from "./styles";

interface CardCategoriesProps {
  name: string;
}

export function CardCategories({name}: CardCategoriesProps) {
  return (
    <Container>
      <p>{name}</p>:
    </Container>
  )
}