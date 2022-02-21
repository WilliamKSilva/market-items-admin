import { render, waitFor, screen } from '@testing-library/react'
import { CardSale } from '.'

describe('<CardSale />', () => {
  it('render component with text and image', () => {     
    const { container } = render(<CardSale title="test" price="5.5" image="img.png" />)
            
    const component = container.querySelector('#root > div > div > div:nth-child(2)')   

    waitFor(() => expect(component).toBeInTheDocument())

    screen.logTestingPlaygroundURL()            
  })
})