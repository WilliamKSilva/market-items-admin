import { render, waitFor, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { useForm } from 'react-hook-form'
import { InputForm } from '.'

describe('<Input />', () => { 
  const { result } = renderHook(() => useForm())

  const control = result.current.control
  const watch = result.current.watch

  it('render input component with all required props', () => {     
    const { container } = render(
      <InputForm 
        name="Test" 
        dafaultValue="TestValue" 
        control={control}
        placeHolder="Test" 
      />
    )
            
    const component = container.querySelector('#root > div > div > div:nth-child(3) > div:nth-child(1)')   

    waitFor(() => expect(component).toBeInTheDocument())

    screen.logTestingPlaygroundURL()            
  })

  it('should watch the input value changing', () => {     
    const { container } = render(
      <InputForm 
        name="Test" 
        dafaultValue="TestValue" 
        control={control}
        placeHolder="Test" 
      />
    )
            
    const component = container.querySelector('#root > div > div > div:nth-child(3) > div:nth-child(1)')  
    
    const inputValue = watch("Test")    

    waitFor(() => expect(component).toBeInTheDocument())

    console.log(inputValue)

    screen.logTestingPlaygroundURL()            
  })
})