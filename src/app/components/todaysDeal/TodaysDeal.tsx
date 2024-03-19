import React from 'react'
import './TodaysDeal.css'

const TodaysDeal = () => {
  return (
    <>
        <div><h5 className='fw-bold' style={{margin: 25}}>Today’s Deals</h5></div>
        <div className='TodaysDeals m-3'>
            <div className='row'>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img1.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 77% off</span>
                    <span>Best Offers on Storite</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img2.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 60% off</span>
                    <span>Best Offers on Storite</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img3.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 57% off</span>
                    <span>Best Deals on Puma</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img4.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 94% off</span>
                    <span>Travel Adapters..</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img5.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 40% off</span>
                    <span>Campus Footwear</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img6.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 69% off</span>
                    <span>Men's Formal Shoes</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img7.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 65% off</span>
                    <span>Top Trendy Bags</span>
                </div>
                <div className='col d-flex flex-wrap flex-column justify-content-end TodaysDeals-div'>
                    <div className='pb-2'><img src={'/img8.jpg'} style={{height:100}}/></div>
                    <span className='rounded-1 bg-danger text-white ps-1'>Up to 64% off</span>
                    <span>Travel Accessories</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodaysDeal