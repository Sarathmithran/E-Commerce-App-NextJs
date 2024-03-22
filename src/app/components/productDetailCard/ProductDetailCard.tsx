import { ProductServices } from '@/app/services/product-services';
import React from 'react'
import './productDetailCard.css'
import Heart from '@/SVG/heart';
import RupeesIcon from '@/SVG/rupeesIcon';
import AddToCart from '../addToCart/AddToCart';
import Rating from '@/SVG/rating';
import BackBtn from '../backBtn/BackBtn';
import DownArrow from '@/SVG/downArrow';


const ProductDetailCard = async (props:any) => {

    const product = await ProductServices.getProductById(props.productId);

    // Generate random rating between 1 and 5
    const rating = (Math.random() * (5 - 1) + 1).toFixed(1);
    // Generate random number of reviews
    const reviews = Math.floor(Math.random() * 1000) + 1;

    //removing tags from product description
    function removeTags(input: string) {
        return input?.replace(/<\/?[^>]+(>|$)/g, "");
    }
    const productDescription = removeTags(product.description);
          
  return (
    <> 
        <div className='container prodDetail-container mt-5 mb-5'>
            <div className='row'>
                <div className='col'>
                <BackBtn/>
                </div>
                <div className='col-6 d-flex gap-4'>
                    <img src={product.image?.url} alt='product image' width={500} height={500}/>
                    <Heart/>
                </div>
                <div className='col-5'>
                    <div>
                        <span className='fw-bold fs-1'>{product.name}</span>
                    </div>
                    <div>
                        <span className='text-danger fs-5 text-uppercase fw-bold'>{product.categories[0]?.name}</span>
                    </div>
                    <div>
                        <Rating/><span className='ps-2 fw-semibold'>{rating} ({reviews})</span><DownArrow/>
                    </div>
                    <div>
                        <span className='text-secondary'>{productDescription}</span>
                    </div>
                    <div>
                        <span className='fw-bold fs-1 text-success'><sup>₹</sup>{product.price.formatted} <del className='text-secondary fs-5 fw-normal'>₹{product.price.raw+1000}</del></span>
                    </div>
                    <div>
                        <span className='fs-4 text-danger fw-bold'>Save 30%</span>
                    </div>
                    <div>
                        <span className='cod'><RupeesIcon/> Cash on Delivery available</span>
                    </div>
                    <div>
                        <span className='delivery'>Free delivery for plus members<img src='/free-delivery.png'/></span>
                    </div>
                    <AddToCart prodId={product.id}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetailCard