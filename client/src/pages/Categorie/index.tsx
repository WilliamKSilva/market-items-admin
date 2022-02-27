import { useNavigate, useParams } from 'react-router'
import { CategorieListItem } from './CategorieListItem'
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'

export function Categorie() {
  const navigate = useNavigate();
  const { name } = useParams();
  const pageCategorie = name;

  const pageTitle = pageCategorie

  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon onClick={() => navigate('/categories')}/>
          <h1>{pageTitle}</h1>
        </Heading>
        <WrapperCategoriesCards>
          <CategorieListItem image_url="https://pngimg.com/uploads/macbook/macbook_PNG49.png" price="2.5" title="Surface laptop 3"/>
          <CategorieListItem image_url="https://pngimg.com/uploads/macbook/macbook_PNG49.png" price="2.5" title="Surface laptop 3"/>
          <CategorieListItem image_url="https://pngimg.com/uploads/macbook/macbook_PNG49.png" price="2.5" title="Surface laptop 3"/>
          <CategorieListItem image_url="https://pngimg.com/uploads/macbook/macbook_PNG49.png" price="2.5" title="Surface laptop 3"/>          
        </WrapperCategoriesCards>        
      </Content>
    </Container>
  )
}