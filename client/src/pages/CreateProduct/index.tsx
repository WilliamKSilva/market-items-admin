import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Button } from '../../components/Button';
import { CardProduct } from '../../components/CardProduct';
import { Container, Content, Heading, WrapperProduct, Input, WrapperInputs, WrapperButton, ArrowIcon } from './styles';
import { useCreateProduct } from './useCreateProduct';

export function CreateProduct() {
  const { watch, setValue, register, handleSubmit } = useForm();
  const { onCreateProduct } = useCreateProduct();

  const navigate = useNavigate();  
  
  const inputValues = watch(["productName", "productPrice", "productImageURL"])  

  // Forcing a change in one of the inputs to call the react-hook-form watch method
  useEffect(() => {
    setValue("productName", "Product")        
  }, [])  
    
  return (
    <Container>
      <Content onSubmit={handleSubmit(onCreateProduct)}>
        <Heading>
          <ArrowIcon onClick={() => navigate('/')}/>
          <h1>Create Product</h1>
        </Heading>
        <WrapperProduct>
          <CardProduct image_url={inputValues[2]} price={inputValues[1]} title={inputValues[0]}/>
        </WrapperProduct>
        <WrapperInputs>
          <Input 
            {...register("productName")} 
            defaultValue="Name" 
            placeholder="Name" 
          />
          <Input 
            {...register("productPrice")} 
            defaultValue="20" 
            placeholder="Price"
          />
          <Input 
            {...register("productTag")} 
            defaultValue="Tag" 
            placeholder="Tag"
          />
          <Input 
            {...register("productDescription")} 
            defaultValue="Description" 
            placeholder="Description"
          />
          <Input 
            {...register("productImageURL")} 
            defaultValue="https://uxwing.com/wp-content/themes/uxwing/download/30-logistics-shipping-delivery/search-product.png" 
            placeholder="Image"
          />          
        </WrapperInputs>
        <WrapperButton>
          <Button title="Create" type="submit" />
        </WrapperButton>
      </Content>
    </Container>
  )
}