import Image from 'next/image'
import React from 'react'

const OtherAdds = () => {
  return (
    <div className='row m-1'>
        <div className='col-12 pb-2'>
            <Image src={'/add2.webp'} width={1500} height={300} alt='img' layout="responsive"/>
        </div>
        
    </div>
  )
}

export default OtherAdds