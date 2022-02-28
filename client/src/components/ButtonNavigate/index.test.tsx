import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { fn } from 'vitest'
import { ButtonNavigate } from '.'

describe('<ButtonNavigate />', () => {
  it('should render component with title and route', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });     
    render(
      <Router location={history.location} navigator={history}>
        <ButtonNavigate title="Test" route="/"/>
      </Router>
    )
            
    const component = screen.getByRole('button', {  name: /Test/i})   

    expect(component).toBeInTheDocument()        

    screen.logTestingPlaygroundURL()            
  }) 
  
  it('should call a function onClick', () => {
    const handleClick = fn()
    const history = createMemoryHistory({ initialEntries: ['/'] });     
    render(
      <Router location={history.location} navigator={history}>
        <ButtonNavigate title="ok" route="/" onClick={handleClick}/>
      </Router>
    )                

    const component = screen.getByRole('button', {  name: /ok/i})

    fireEvent.click(component)
    expect(handleClick).toHaveBeenCalledTimes(1)       

    screen.logTestingPlaygroundURL()            
  })
})