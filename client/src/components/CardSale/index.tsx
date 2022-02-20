import { Container, ItemImage, ItemInfo } from './styles';

export function CardSale() {
  return (
    <Container>
      <ItemInfo>
        <strong>Bose Home Speaker</strong>
        <p>USD 2.79</p>
      </ItemInfo>
      <ItemImage src="https://thegoodguys.sirv.com/products/50074129/50074129_755756.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90" alt="Home speaker from Bose brand."/>
    </Container>
  )
}