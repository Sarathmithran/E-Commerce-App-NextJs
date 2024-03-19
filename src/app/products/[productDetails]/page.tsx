import ProductDetailCard from '@/app/components/productDetailCard/ProductDetailCard';
import { ProductServices } from '@/app/services/product-services';
import React from 'react'


export async function generateMetadata(props:any){
    const productId = props.params.productDetails;
    if(productId){
      const product = await ProductServices.getProductById(productId);
      return{
        title: product.name
      }
    }
    return{
      title: 'Product details page'
    }
  }


const ProductDetail = async (props:any) => {

  const productId = props.params.productDetails; 

  return (
    <>
        <ProductDetailCard productId={productId}/>
    </>
  )
}

export default ProductDetail