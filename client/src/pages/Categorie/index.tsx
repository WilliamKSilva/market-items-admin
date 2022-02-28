import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { ProductListItem } from './ProductListItem'
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'
import { useCategorie } from './useCategorie';

export function Categorie() {  
  const { name } = useParams();
  const pageCategorie = name;
  const { categorieData, openModal, setOpenModal, modalMessage } = useCategorie();           

  return (
    <Container>
      {openModal && <Modal setOpenModal={setOpenModal} message={modalMessage} />}
      <Content>
        <Heading>
          <Link to="/categories">
            <ArrowIcon />
          </Link>
          <h1>{pageCategorie}</h1>
        </Heading>
        <WrapperCategoriesCards>
          {categorieData.map((product) => (
            <ProductListItem
              _id={product._id}
              key={product._id} 
              image_url={product.image_url} 
              price={product.price} 
              title={product.name}
              isFavorite={product.status}              
            />
          ))}
                    
        </WrapperCategoriesCards>        
      </Content>
    </Container>
  )
}