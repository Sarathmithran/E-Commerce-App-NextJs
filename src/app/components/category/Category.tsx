import Link from 'next/link';
import './Category.css';

const Category = () => {

    return ( 
        <div className="category row m-3">
            <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
                <Link href={'/categories/cat_gnZO5kGM357MNq'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={'/electronics.jpg'} style={{height:50}} className='rounded'/><span style={{fontSize:'medium'}}>Electronics</span>
                </Link>
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
                <Link href={'/categories/cat_7ZAMo1jEW5NJ4x'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={'/fashion.jpg'} style={{height:50}} className='rounded'/><span style={{fontSize:'medium'}}>Fashion</span>
                </Link>
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
                <Link href={'/categories/cat_8XO3wpBRX5YAzQ'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={'/furniture.jpeg'} style={{height:50}} className='rounded'/><span style={{fontSize:'medium'}}>Furniture</span>
                </Link>    
            </div>
            <div className="Electronics col-6 col-md-4 col-lg-3 pt-2">
                <Link href={'/categories/cat_bO6J5aEd95EjpK'} className='d-flex flex-column' style={{textDecoration:'none'}}>
                    <img src={'kitchen.jpg'} style={{height:50}} className='rounded'/><span style={{fontSize:'medium'}}>Kitchen</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Category;