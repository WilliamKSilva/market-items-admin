import { CardSale } from '../../components/CardSale';
import { NavigateIcon } from '../../components/NavigateIcon';
import { SalesListItem } from './SalesListItem';
import { Container, ContainerSales, Content, GiftIcon, Heading, HeartIcon, MenuIcon, UserCheckIcon, WrapperNavigateIcon } from './styles';

export default function Home() {
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
          <NavigateIcon href="/" name="Categories">
            <MenuIcon />
          </NavigateIcon>
          <NavigateIcon href="/" name="Favorites">
            <HeartIcon />
          </NavigateIcon>
          <NavigateIcon href="/" name="Gifts">
            <GiftIcon />
          </NavigateIcon>
          <NavigateIcon href="/" name="Best selling">
            <UserCheckIcon />
          </NavigateIcon>          
        </WrapperNavigateIcon>
        <ContainerSales>
          <h2>Sales</h2>
          <section>
            <SalesListItem />
            <SalesListItem />
          </section>
        </ContainerSales>
      </Content>
    </Container>
  )
}