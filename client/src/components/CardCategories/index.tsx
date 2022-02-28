import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Container, RightArrowIcon } from "./styles";

interface CardCategoriesProps {
  name: string;
  route: string;
}

export function CardCategories({ name, route }: CardCategoriesProps) {  

  return (
    <Link to={route} style={{textDecoration: 'none'}}>
      <Container>
        <p>{name}</p>
        <RightArrowIcon />
      </Container>
    </Link>
  )
}