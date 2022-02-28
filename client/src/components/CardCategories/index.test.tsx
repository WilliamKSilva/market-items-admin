import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { CardCategories } from '.'

describe('<CardCategories />', () => {
  it('render component with categorie text and link', async () => {     
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Router location={history.location} navigator={history}>
        <CardCategories name="test" route="/"/>
      </Router>
    )    
            
    const component = screen.getByText(/test/i)   

    expect(component).toBeInTheDocument()        

    screen.logTestingPlaygroundURL()            
  })
})