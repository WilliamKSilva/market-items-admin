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
          <CardCategories name="Smarthphones" route="/categories/smarthphone"/>
          <CardCategories name="Games" route="/categories/game"/>
          <CardCategories name="Laptops" route="/categories/laptop"/>
          <CardCategories name="Speakers" route="/categories/speaker"/>
        </WrapperCategoriesCards>                
      </Content>
    </Container>
  )
}