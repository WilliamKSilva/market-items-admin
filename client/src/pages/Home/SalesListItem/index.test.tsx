import { render, waitFor, screen } from '@testing-library/react'
import { SalesListItem } from '.'

describe('<SalesListItem />', () => {
  it('render component with text and image', () => {     
    const { container } = render(<SalesListItem />)
            
    const component = container.querySelector('#root > div > div > div:nth-child(2)')   

    waitFor(() => expect(component).toBeInTheDocument())

    screen.logTestingPlaygroundURL()            
  })
})