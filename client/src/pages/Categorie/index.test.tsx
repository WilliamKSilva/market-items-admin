import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { Categorie } from '.'

describe('<Categorie />', () => {
  it('should render the page with all the content', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });                
    render(
      <Router location={history.location} navigator={history}>
        <Categorie />
      </Router>
    )         
       
    const page = screen.getByRole('link')

    expect(page).toBeInTheDocument();
    
    screen.logTestingPlaygroundURL()            
  })
})