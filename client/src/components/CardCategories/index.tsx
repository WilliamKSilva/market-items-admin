import { useNavigate } from "react-router";
import { Container, RightArrowIcon } from "./styles";

interface CardCategoriesProps {
  name: string;
  route: string;
}

export function CardCategories({ name, route }: CardCategoriesProps) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(route)}>
      <p>{name}</p>
      <RightArrowIcon />
    </Container>
  )
}