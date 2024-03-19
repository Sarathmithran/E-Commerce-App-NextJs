"use client"

import { ProductServices } from '@/app/services/product-services';
import React, { useState } from 'react'

const AddToCart = (props:any) => {

    const [addMessage,setAddMessage] = useState(false);

    const addTocart = async (prodId:any) => {
        try {
            const response = await ProductServices.addToCart(prodId);
            const data = await response.json();
            setAddMessage(true);    
        } catch (error) {
            console.error('An error occurred:', error);
        } finally{
          setTimeout(() =>{
            setAddMessage(false);
          },2500)
        }
    };


  return (
    <div>
        {addMessage && (
                    <div className="text-bg-success p-2 rounded-5 position-fixed z-3" style={{right: "1%", top: "12%"}}>
                        Item added successfully
                    </div>)
        }
        <button className='btn btn-primary fw-semibold' onClick={(()=>addTocart(props.prodId))}>Add to cart</button>
    </div>
  )
}

export default AddToCart