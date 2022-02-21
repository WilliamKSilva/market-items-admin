import { render, screen } from '@testing-library/react'
import { NavigateIcon } from '.'

describe('<NavigateIcon />', () => {
  it('should render link and children', () => {
    render(<NavigateIcon href="/my-link" name="test">Test</NavigateIcon>)

    const children = screen.getByRole('link', { name: /Test/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')        
    
    screen.logTestingPlaygroundURL()    
  })
})