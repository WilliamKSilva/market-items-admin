import { render, waitFor, screen } from '@testing-library/react'
import { CardProduct } from '.'

describe('<CardProduct />', () => {
  it('render component with text and image', () => {     
    const { container } = render(<CardProduct title="test" price="5.5" image_url="https://m.media-amazon.com/images/I/5194E5ZdV7L._AC_SX679_.jpg" />)
            
    const component = container.querySelector('#root > div > div > div:nth-child(2)')   

    waitFor(() => expect(component).toBeInTheDocument())

    screen.logTestingPlaygroundURL()            
  })
})