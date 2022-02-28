import { render, screen } from '@testing-library/react'
import { Categorie } from '.'

vitest.mock('react-router-dom')

describe('<Categorie />', () => {
  it('should render the page with all the content', () => {                
    render(<Categorie />)        
                
    expect(screen.getByText("Categories")).toBeInTheDocument();
    screen.logTestingPlaygroundURL()            
  })
})