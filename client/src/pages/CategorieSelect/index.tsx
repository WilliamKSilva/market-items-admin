import { useNavigate } from "react-router";
import { CardCategories } from "../../components/CardCategories";
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from "./styles";

export function CategorieSelect() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon onClick={() => navigate('/')} />
          <h1>Categories</h1>          
        </Heading>
        <WrapperCategoriesCards>
          <CardCategories name="Smarthphones" route="/categories/smarthphones"/>
          <CardCategories name="Games" route="/categories/games"/>
          <CardCategories name="Laptops" route="/categories/laptops"/>
          <CardCategories name="Speakers" route="/categories/speakers"/>
        </WrapperCategoriesCards>                
      </Content>
    </Container>
  )
}