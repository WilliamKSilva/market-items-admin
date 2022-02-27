import { useNavigate } from 'react-router';
import { CardSale } from '../../components/CardSale';
import { NavigateIcon } from '../../components/NavigateIcon';
import { SalesListItem } from './SalesListItem';
import { 
  Container, 
  ContainerSales, 
  Content, 
  Heading, 
  HeartIcon, 
  MenuIcon, 
  AddIcon, 
  WrapperNavigateIcon 
} from './styles';

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>           
      <Content>        
        <Heading>
          <h1>Home</h1>
        </Heading>
        <CardSale 
          title="Bose Home speaker" 
          price="USD 279"
          image="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_home_speaker_500/product_silo_images/bose_home_speaker_500_triple_black_vpa_alexa_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png"  
        />
        <WrapperNavigateIcon>
          <NavigateIcon href="/categories" name="Categories">
            <MenuIcon />
          </NavigateIcon>
          <NavigateIcon href="/" name="Favorites">
            <HeartIcon />
          </NavigateIcon>          
          <NavigateIcon href="/create-product" name="Add product">
            <AddIcon />
          </NavigateIcon>          
        </WrapperNavigateIcon>
        <ContainerSales>
          <h2>Sales</h2>
          <section>
            <SalesListItem 
              name="Iphone" 
              discount="25%" 
              image_url="https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto.png"
              alt="Tech Product"
            />
            <SalesListItem 
              name="Iphone teste" 
              discount="25%" 
              image_url="https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto.png"
              alt="Tech Product"
            />
            <SalesListItem 
              name="Iphone" 
              discount="25%" 
              image_url="https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto.png"
              alt="Tech Product"
            />
            <SalesListItem 
              name="Iphone" 
              discount="25%" 
              image_url="https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s21-produto.png"
              alt="Tech Product"
            />
          </section>
        </ContainerSales>
      </Content>
    </Container>
  )
}