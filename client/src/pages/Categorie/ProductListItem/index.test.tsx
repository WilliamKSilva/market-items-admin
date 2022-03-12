import { render, screen, waitFor } from '@testing-library/react';
import { ProductListItem } from ".";

describe("<ProductListItem />", () => {        
    it('should render the component with all the content', () => {  
      const product = {
        _id: "_id",
        title: "Playstation 5",
        price: "500",
        isFavorite: true,
        image_url: "https://gmedia.playstation.com/is/image/SIEPDC/pla…zontal-product-shot-01-ps5-en-29sep21?$native--t$"
      }
      const { container } = render(
        <ProductListItem          
          {...product}
        />
      );      

      waitFor(() => expect(container.querySelector('#sandbox > div > div > div > svg > path')).toBeInTheDocument());
      
      expect(screen.getByRole('img', {
        name: /a tech product image/i
      })).toBeInTheDocument()
      
      expect(screen.getByRole('heading', {
        name: /playstation 5/i
      })).toBeInTheDocument()

      expect(screen.getByText(/usd 500/i)).toBeInTheDocument()        
    });    
})