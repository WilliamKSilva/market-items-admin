import { CardCategories } from "../../components/CardCategories";
import { ArrowIcon, Container, Content, Heading } from "./styles";

export default function Categories() {
  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon />
          <h1>Categories</h1>          
        </Heading>
        <CardCategories name="Computers"/>
      </Content>
    </Container>
  )
}