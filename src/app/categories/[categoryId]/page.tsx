'use client'
import { ProductServices } from '@/app/services/product-services';
import Link from 'next/link';
import './category.css';
import React, { useEffect, useState } from 'react'
import Loading from '@/app/components/loading/Loading';
import Rating from '@/SVG/rating';
import DownArrow from '@/SVG/downArrow';

const Categories = (props:any) => {

    const [categoriesName,setCategoriesName] = useState('');
    const [categoryData,setCategoryData] = useState([]);
    const {categoryId} = props.params; 

    useEffect(() => {
        const fetchProducts = async () => {
            const categoryData = await ProductServices.getProducts();
            setCategoryData(categoryData);
        }
        fetchProducts();
    },[]);
    useEffect(()=>{
        const fetchCategoryData = async () =>{
            const categoryName = await ProductServices.fetchCategoryData(categoryId);
            setCategoriesName(categoryName);
        }
        fetchCategoryData();
    },[categoryId]);

     // Generate random rating between 1 and 5
     const rating = (Math.random() * (5 - 1) + 1).toFixed(1);
     // Generate random number of reviews
     const reviews = Math.floor(Math.random() * 1000) + 1;

    //store filtered products
    const [filterCategoryProducts, setFilterCategoryProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = categoryData.filter((d:any) => {
            return d.categories[0]?.slug === categoriesName;
        });
        setFilterCategoryProducts(filteredProducts)
    }, [categoryData, categoriesName]);

  return (
    <div className="d-flex justify-content-center flex-wrap mb-5 gap-4" style={{minHeight:'50vh'}}>
            {
                filterCategoryProducts.length === 0 && (<Loading/>)
            }
    <>
        {
            filterCategoryProducts?.map((product:any) => {
                return(
                        <Link href={'/products/'+product.id} style={{textDecoration:'none'}}>
                        <div className="prod-container d-flex flex-column justify-content-evenly">
                            <div className='text-center'><img src={product?.image?.url} style={{height:'190px'}}/></div>
                            <div className='text-center'><h6 className='text-black'>{product.name}</h6></div>
                            <div className='text-center'><Rating/><span className='ps-2 text-success fw-semibold'>{rating} ({reviews})</span><DownArrow/></div>
                            <div className='text-center'><span className='fw-bold fs-4'>₹{product.price.formatted}</span> <del className='text-secondary fw-normal'>{product.price.raw+1000}</del></div>
                            <div className='text-center'><span className='text-danger fw-semibold'>Deal of the day</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-danger fw-bold'>Save 30%</span></div>
                        </div>
                        </Link>
                )
            })
        }
    </>
    </div>
  )
}

export default Categories