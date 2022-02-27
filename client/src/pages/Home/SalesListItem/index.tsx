import { Container } from './styles';

type SalesListItemProps = {
  discount: string;
  image_url: string;
  alt: string;
  name: string;
}

export function SalesListItem({discount, image_url, alt, name}: SalesListItemProps) {
  return (
    <Container>
      <span>
        <p>-{discount}</p>
      </span>
      <div>
        <img 
          src={image_url} 
          alt={alt}
        />
        <strong>{name}</strong>
      </div>
    </Container>
  )
}