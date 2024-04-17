import Image from 'next/image';
import './RecommendedItems.css'

const RecommendedItems = () => {
    return ( 
        <div className='m-3'>
            <div>
                <h5 className='fw-bold'>Recommended Items</h5>
            </div>
            <div className='recommendedItems'>
                <div className='d-flex gap-4'>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/APPLE.png'} alt='apple' height={180} width={170}/></div>
                        <span>Apple iPhone 15 Pro</span>
                        <span className='fw-bold'><sup>₹</sup>79990 <del className='text-secondary recommended-price fw-normal'>85,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/REDMI.png'} alt='redmi' height={180} width={170}/></div>
                        <span>Redmi 13 Pro Max</span>
                        <span className='fw-bold'><sup>₹</sup>28999 <del className='text-secondary recommended-price fw-normal'>30,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/oneplus.png'} alt='oneplus' height={180} width={170}/></div>
                        <span>OnePlus Nord 2</span>
                        <span className='fw-bold'><sup>₹</sup>20999 <del className='text-secondary recommended-price fw-normal'>23,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/moto.jpg'} alt='moto' height={180} width={170}/></div>
                        <span>Motorola Moto E 7i</span>
                        <span className='fw-bold'><sup>₹</sup>18999 <del className='text-secondary recommended-price fw-normal'>20,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/nothing.jpg'} alt='nothin' height={180} width={170}/></div>
                        <span>Nothing Phone 3 Pro</span>
                        <span className='fw-bold'><sup>₹</sup>39999 <del className='text-secondary recommended-price fw-normal'>45,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/Poco.jpg'} alt='poco' height={180} width={170}/></div>
                        <span>Poco M4 Pro 5G</span>
                        <span className='fw-bold'><sup>₹</sup>25999 <del className='text-secondary recommended-price fw-normal'>27,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/moto.jpg'} alt='moto' height={180} width={170}/></div>
                        <span>Motorola Moto E 7i</span>
                        <span className='fw-bold'><sup>₹</sup>18999 <del className='text-secondary recommended-price fw-normal'>20,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/HUAWEI.jpg'} alt='hUAWEI' height={180} width={170}/></div>
                        <span>HUAWEI P40 Pro</span>
                        <span className='fw-bold'><sup>₹</sup>35999 <del className='text-secondary recommended-price fw-normal'>39,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/nothing.jpg'} alt='nothing' height={180} width={170}/></div>
                        <span>Nothing Phone 3 Pro</span>
                        <span className='fw-bold'><sup>₹</sup>39999 <del className='text-secondary recommended-price fw-normal'>45,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/Poco.jpg'} alt='poco' height={180} width={170}/></div>
                        <span>Poco M4 Pro 5G</span>
                        <span className='fw-bold'><sup>₹</sup>25999 <del className='text-secondary recommended-price fw-normal'>27,000</del></span>
                    </div>
                    <div className='d-flex flex-column justify-content-center RI-div'>
                        <div><Image src={'/samsung.jpg'} alt='samsung' height={180} width={170}/></div>
                        <span>Galaxy S21 Ultra 5G</span>
                        <span className='fw-bold'><sup>₹</sup>50999 <del className='text-secondary recommended-price fw-normal'>58,000</del></span> 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RecommendedItems;