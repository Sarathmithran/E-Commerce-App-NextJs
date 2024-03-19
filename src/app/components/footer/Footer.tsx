import Payment from '@/SVG/payment'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="container-fluid footer-sty text-white">
            <div className="row pt-4">
                <div className="col-3">
                    
                    <ul style={{listStyleType: 'none'}}>
                        <h6 className='text-white opacity-75'>ABOUT</h6>
                        <a href="/contact" className="footer-link fw-semibold"><li>Contact Us</li></a>
                        <a href="/about" className="footer-link fw-semibold"><li>About Us</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Careers</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Corporate Information</li></a>
                        
                    </ul>
                </div>
                <div className="col-3">
                    <ul style={{listStyleType: 'none'}}>
                        <h6 className='text-white opacity-75'>HELP</h6>
                        <a href="/" className="footer-link fw-semibold"><li>Payments</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Shippings</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Cancellations & Returns</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>FAQ</li></a>
                    </ul>
                </div>
                <div className="col-3">
                    <ul style={{listStyleType: 'none'}}>
                        <h6 className='text-white opacity-75'>CONSUMER POLICY</h6>
                        <a href="/" className="footer-link fw-semibold"><li>Cancellations & Returns</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Terms of Use</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Security</li></a>
                        <a href="/" className="footer-link fw-semibold"><li>Privacy</li></a>
                    </ul>
                </div>
                <div className="col-3" style={{borderLeft:'1px solid white'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <h6 className='text-white opacity-75'>Mail Us:</h6>
                        <li className='fw-semibold'>
                            Online shoppie Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Kochi, 660103, kerala, India
                        </li>
                        <li className='pt-1'>
                            <a href='#'><img src={'/Fb.png'} height={18} className='me-2'/></a>
                            <a href='#'><img src={'/x.png'} height={23} className='me-1'/></a>
                            <a href='#'><img src={'/insta.png'} height={16} /></a>
                        </li>    
                    </ul>
                </div>

                {/* copyright div */}

                <div className="row flex-wrap pt-2 mt-3" style={{borderTop:'1px solid white'}}>
                    <div className="col d-flex justify-content-center">
                        <p>Become a Seller</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>Advertiser</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>Gift cards</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>© All Rights Reserved 2024</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>® Help Center</p>
                    </div>
                    <div className='col'>
                    <a href='#'><Payment/></a>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Footer