import { useNavigate, useParams } from 'react-router'
import { Modal } from '../../components/Modal';
import { ProductListItem } from '../Categorie/ProductListItem';
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'
import { useFavorites } from './useFavorites';

export function Favorites() {
  const navigate = useNavigate();
  const { favoritesData, openModal, setOpenModal, modalMessage } = useFavorites();          

  return (
    <Container>
      {openModal && <Modal setOpenModal={setOpenModal} message={modalMessage}/>}
      <Content>
        <Heading>
          <ArrowIcon onClick={() => navigate('/')}/>
          <h1>Favorites</h1>
        </Heading>
        <WrapperCategoriesCards>
          {favoritesData.map((product) => (
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