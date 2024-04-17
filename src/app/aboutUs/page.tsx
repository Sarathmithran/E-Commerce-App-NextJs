import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center">
                        <h1 className='fw-bold'>ABOUT US</h1>
                        <p className="text-secondary">Welcome to our eCommerce store! We are passionate about providing high-quality products and exceptional customer service to our valued customers.  Our goal is to offer a seamless online shopping experience with a wide range of products, competitive prices, and reliable delivery.</p>
                        <p className="text-secondary">Our team is dedicated to ensuring that every customer has a positive experience while shopping with us. Whether you're looking for electronics, fashion items, home goods, or any other product category, we strive to meet your needs and exceed your expectations.</p>
                    </div>
                </div>    
            </div>
            <div>
                <div className='container d-flex flex-wrap'>
                    <div className='col'>
                        <Image src={'/technology.png'} alt='technology' width={750} height={550} layout='responsive'/>
                    </div>
                    <div className='col d-flex flex-column justify-content-center'>
                        <div className='pb-2 fw-bold fs-1'><span>INNOVATION</span></div>
                        <div className='text-secondary pb-2'><span>Technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless.</span></div>
                        <div><button className='btn btn-primary fw-bold'>READ MORE</button></div>
                    </div>
                </div>
            </div>
            <div className='pt-5 pb-5'>
                <div className='container d-flex flex-wrap'>
                    <div className='col d-flex flex-column justify-content-center'>
                        <div className='pb-2 fw-bold fs-1'><span>Ethics & Compliance</span></div>
                        <div className='text-secondary pb-2'><span>Building trust with Integrity. Every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.</span></div>
                        <div><button className='btn btn-primary fw-bold'>KNOW MORE</button></div>
                    </div>
                    <div className='col pt-1'>
                        <Image src={'/ethics.jpg'} alt='ethics' className='rounded-3' width={750} height={400} layout='responsive'/>
                    </div>
                </div>   
            </div>
            <div>
                <div className='container pt-5 pb-5'  style={{textAlign:'center'}}>
                    <p className="fw-bold">Thank you for choosing us for your shopping needs. We appreciate your trust and support, and we look forward to serving you!</p>
                </div>
            </div>
    </div>
  )
}

export default About