import './OfferSection.css';

const OfferSection = () => {
    return ( 
        <div style={{border:'1px solid lightgray'}} className='row flex-wrap m-3'>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Starting ₹199 | Combo offers</h5>
                </div>
                <div>
                    <img src={'/Combo.jpg'}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Up to 50% off | International brands</h5>
                </div>
                <div>
                    <img src={'/imgfull.jpg'}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>

            <div className='offer-div col'>
                <div>
                    <h5 className='fw-bold'>Starting ₹99 | Indoor plants</h5>
                </div>
                <div>
                    <img src={'/imgfull2.jpg'}/>
                </div>
                <div><span className='text-secondary'>see all offers</span></div>
            </div>
        </div>
     );
}
 
export default OfferSection;