import { render, screen, fireEvent } from '@testing-library/react'
import { fn } from 'vitest'
import { Button } from '.'

describe('<Button />', () => {
  it('render component with categorie text', () => {     
    render(<Button title="Test" />)
            
    const component = screen.getByRole('button', {  name: /Test/i})   

    expect(component).toBeInTheDocument()        

    screen.logTestingPlaygroundURL()            
  })
  
  it('should call a function onClick', () => {
    const handleClick = fn()
    render(<Button title="onClick" onClick={handleClick}/>)        
    
  
    const component = screen.getByRole('button', {  name: /onClick/i})

    fireEvent.click(component)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})