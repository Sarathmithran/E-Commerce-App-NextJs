import Link from 'next/link'
import React from 'react'
import './productCard.css'
import { ProductsDataType } from '@/app/services/classes';
import Rating from '@/SVG/rating';
import DownArrow from '@/SVG/downArrow';

const ProductCard = (props:any) => {  

    const product: ProductsDataType = props.products;

    // Generate random rating between 1 and 5
    const rating = (Math.random() * (5 - 1) + 1).toFixed(1);
    // Generate random number of reviews
    const reviews = Math.floor(Math.random() * 1000) + 1;
    
  return (
    <div className='d-flex flex-wrap justify-content-center ms-5 mb-5'>
                    <Link href={'/products/'+product.id} style={{textDecoration:'none'}}>
                        <div className="prod-container d-flex flex-column justify-content-evenly">
                            <div className='text-center'><img src={product.image.url} style={{height:'190px'}}/></div>
                            <div className='text-center'><h6 className='text-black'>{product.name}</h6></div>
                            <div className='text-center'><Rating/><span className='ps-2 text-success fw-semibold'>{rating} ({reviews})</span><DownArrow/></div>
                            <div className='text-center'><span className='fw-bold fs-4'>₹{product.price.formatted}</span> <del className='text-secondary fw-normal'>{product.price.raw+1000}</del></div>
                            <div className='text-center'><span className='text-danger fw-semibold'>Deal of the day</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-danger fw-bold'>Save 30%</span></div>
                        </div>
                    </Link>    
    </div>
  )
}

export default ProductCard