import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { CardProduct } from '../../components/CardProduct';
import { InputForm } from '../../components/InputForm';
import { Container, Content, Heading, WrapperProduct, WrapperInputs, WrapperButton } from './styles';

export default function CreateProduct() {
  const { control, watch, setValue } = useForm();  
  
  const inputValues = watch(["productName", "productPrice", "productImageURL"])

  // Forcing a change in one of the inputs to call the react-hook-form watch method
  useEffect(() => {
    setValue("productName", "Product")    
  }, [])
    
  return (
    <Container>
      <Content>
        <Heading>
          <h1>Create Product</h1>
        </Heading>
        <WrapperProduct>
          <CardProduct image_url={inputValues[2]} price={inputValues[1]} title={inputValues[0]}/>
        </WrapperProduct>
        <WrapperInputs>
          <InputForm 
            name="productName"
            placeHolder="Name"
            control={control}
            dafaultValue="Product" 
          />
          <InputForm 
            name="productPrice"
            placeHolder="Price"
            control={control}
            dafaultValue="20" 
          />
          <InputForm 
            name="productImageURL"
            placeHolder="ImageURL"
            control={control}
            dafaultValue="https://uxwing.com/wp-content/themes/uxwing/download/30-logistics-shipping-delivery/search-product.png" 
          />          
        </WrapperInputs>
        <WrapperButton>
          <Button title="Create"/>
        </WrapperButton>
      </Content>
    </Container>
  )
}