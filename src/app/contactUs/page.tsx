import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container mt-4">
                <h5 className="fw-bold">Help Center | 24x7 Customer Care Support</h5>
                <span className="text-secondary" style={{fontSize:'smaller'}}>The Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Help Centre also lists out more information that you may need regarding Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Help Centre number or even access Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online.</span>
            </div>
            <div className="container  mt-5 mb-5">
                <div className="row">
                    <div className="col">
                        <h1>Contact Us</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Enter your name.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" required className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary fw-semibold">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact