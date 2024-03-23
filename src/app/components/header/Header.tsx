'use client'
import Image from 'next/image'
import React from 'react'
import './Header.css'
import Link from 'next/link'
import CartLogo from '@/SVG/cart'
import { usePathname } from 'next/navigation'
import Search from './Search'
import { useCart } from '../../services/cartContext';

const Header = () => {

  const { cartItems } = useCart();
  console.log('cartitems',cartItems);
  
  const pathname = usePathname();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-container">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={'/logo.png'} alt='logo' className='logo' width={100} height={40}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Search/>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                        <Link className={`link ${pathname === '/' ? 'nav-link active fw-semibold' : 'nav-link fw-semibold nav-menu'}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className={`link ${pathname === '/products' ? 'nav-link active fw-semibold' : 'nav-link fw-semibold nav-menu'}`} href="/products">Products</Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className={`link ${pathname === '/aboutUs' ? 'nav-link active fw-semibold' : 'nav-link fw-semibold nav-menu'}`} href="/aboutUs">About Us</Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link className={`link ${pathname === '/contactUs' ? 'nav-link active fw-semibold' : 'nav-link fw-semibold nav-menu'}`} href="/contactUs">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`link ${pathname === '/cart' ? 'nav-link active' : 'nav-link nav-menu'}`} href="/cart">
                            <CartLogo/>{
                                    //number of items in cart
                                    cartItems.length >=1 && (
                                        <span className="bg-danger rounded-circle mt-5 cart-notification">
                                            {cartItems.length}
                                        </span>
                                    )}
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header