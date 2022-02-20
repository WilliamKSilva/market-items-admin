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
        <CardSale />
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