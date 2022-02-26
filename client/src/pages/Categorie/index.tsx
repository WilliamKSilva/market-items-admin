import { CategorieListItem } from './CategorieListItem'
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'

type CategorieProps = {
  title: string;
}

export function Categorie({title}: CategorieProps) {
  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon />
          <h1>{title}</h1>
        </Heading>
        <WrapperCategoriesCards>
          <CategorieListItem image_url="https://http2.mlstatic.com/D_NQ_NP_926652-MLB47064708351_082021-O.webp" price="2.5" title="Surface laptop 3"/>
          <CategorieListItem image_url="https://http2.mlstatic.com/D_NQ_NP_926652-MLB47064708351_082021-O.webp" price="2.5" title="Surface laptop 3"/>
        </WrapperCategoriesCards>        
      </Content>
    </Container>
  )
}