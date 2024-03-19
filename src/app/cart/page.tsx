"use client"
import React, { useEffect, useState } from 'react'
import { ProductServices } from '../services/product-services';
import CartLoading from '@/SVG/cartLoading';
import OtherAdds from '../components/otherAdds/OtherAdds';
import RecommendedItems from '../components/recommendedItems/RecommendedItems';

const Cart = () => {

  // Remove cart item
  const [removeMessage, setRemoveMessage] = useState(false);

  const removeCartItem = async (prodId:string) => {
    try {
        const response = await ProductServices.removeCartItem(prodId)
        setCartProducts(response);
        setRemoveMessage(true);
    } catch (error) {
        console.error('Error removing item from the cart', error);
    } finally{
        setTimeout(() =>{
        setRemoveMessage(false);
        },2500)
    }};


  //store cart products
  const [cartProducts ,setCartProducts] = useState([]);
  const [loading,setLoading] = useState(true);  
  const [fetchCartProducts ,setFetchCartProducts] = useState([]);

  //fetching cart products
  useEffect(()=>{
    const fetchingCartProducts = async () => {
      try {
          const response = await ProductServices.fetchingCartProducts();
          setFetchCartProducts(response.line_items);   
      } catch (error) {
          console.error('An error occurred:', error);
      } finally{
        setLoading(false);
      }
  };
  fetchingCartProducts();
  },[cartProducts]);

if(loading){
    return <CartLoading/>
}

//calculating total price
let cartTotalPrice = 0;
for(let i of fetchCartProducts){
    cartTotalPrice += i.quantity * i.price.raw
}


  return (
    <>
        <div style={{minHeight:390}} className='mt-3 mb-3'>
          <h6 style={{textAlign:'center',borderBottom:'1px solid lightgray',color:'#5892b1'}} className="container fw-bold fs-3">Shopping Cart</h6>
              {
                  fetchCartProducts?.length === 0 ? (
                      <div className='d-flex justify-content-center align-items-center' style={{minHeight:'30vh'}}>
                        <span className='fs-5 fw-normal opacity-50'>cart is empty</span>
                      </div>
                  ):
                  fetchCartProducts?.map((c) =>{
                      return (
                          <>
                              <div>
                                  {removeMessage && (
                                      <div className="text-bg-danger p-2 rounded-5 position-fixed z-3" style={{right: "1%", top: "12%"}}>
                                          Item removed successfully
                                      </div>
                                  )}
                                  <div style={{textAlign:'center',borderBottom:'1px solid lightgray'}} className='container d-flex flex-wrap justify-content-center pt-2 pb-3'>
                                      <div className='col-1'>
                                          <img src={c.image.url}height={60}/>
                                      </div>
                                      <div  className='col-5'>
                                          <h6 className='pt-3 ps-2'>{c.name}</h6>
                                      </div>
                                      <div className='col pt-3 fw-semibold'>
                                          Quantity - {c.quantity}
                                      </div>
                                      <div className='col-2'>
                                          <button className='btn btn-danger mt-2 fw-semibol' onClick={()=>removeCartItem(c.id)}>Remove</button>
                                      </div>
                                      <div className='col pt-3'>
                                          <span className="fw-semibold">₹ {c.quantity * c.price.raw}</span>
                                      </div>
                                  </div>                    
                              </div>
                          </>      
                      )  
                  })
              }
              {
                  fetchCartProducts.length <= 0 ?'':(
                      <div className="container d-flex justify-content-end"> 
                          <span className="fw-bold fs-5">Subtotal : ₹ {cartTotalPrice}</span>  
                      </div>
                  )
              }
              <RecommendedItems/>
              <OtherAdds/>
      </div>
    </>
  )
}

export default Cart