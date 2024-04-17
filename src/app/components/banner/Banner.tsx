import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='m-3'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Image width={1500} height={250} src={'/banner2.webp'} className="d-block w-100" alt="banner image" layout='responsive'/>
                </div>
                <div className="carousel-item">
                <img src="/banner1.webp" className="d-block w-100" alt="banner image"/>
                </div>
                <div className="carousel-item">
                <img src="/banner3.webp" className="d-block w-100" alt="banner image"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Banner