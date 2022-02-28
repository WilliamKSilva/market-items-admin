import { render, waitFor, screen } from '@testing-library/react'
import { CardCategories } from '.'

describe('<CardCategories />', () => {
  it('render component with categorie text', () => {     
    render(<CardCategories name="test" route="/"/>)
            
    const component = screen.getByText(/test/i)   

    expect(component).toBeInTheDocument()    

    screen.logTestingPlaygroundURL()            
  })
})