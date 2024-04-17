import Image from 'next/image';
import React from 'react'

const OtherOffers = () => {
    return ( 
        <div className='m-3' style={{border:'1px solid lightgray',padding:6}}>
            <div>
                <div>
                    <h5 className='fw-bold'>Upto 70% off | Curated furniture from stores nearby</h5>
                </div>
                <div className="row gap-3 pt-2">
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/otherimg1.jpg'}/>
                    </div>
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/otherimg2.jpg'}/>
                    </div>
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/offerimg3.jpg'}/>
                    </div>
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/offerimg4.jpg'}/>
                    </div>
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/offerimg5.jpg'}/>
                    </div>
                    <div className="col">
                        <Image alt='img' height={190} width={210} src={'/offerimg6.jpg'}/>
                    </div>
                </div>
            </div>   
        </div>
     );
}
 
export default OtherOffers;