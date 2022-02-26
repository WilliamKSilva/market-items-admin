import { CardCategories } from "../../components/CardCategories";
import { ArrowIcon, Container, Content, Heading } from "./styles";

export default function CategorieSelect() {
  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon />
          <h1>Categories</h1>          
        </Heading>                
      </Content>
    </Container>
  )
}