import Image from 'next/image';
import img1 from '../../src/assest/1.jpg'
import img2 from '../../src/assest/2.jpg'
import img3 from '../../src/assest/3.jpg'
import img4 from '../../src/assest/4.jpg'
import img5 from '../../src/assest/5.jpg'
import img6 from '../../src/assest/6.jpg'
import './ShopBy.css';

const ShopBy = () => {
    return (
        <div className='w-4/5 mx-auto my-10'>
            <h4 className='text-center my-10 text-3xl'>Shop By</h4>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                <div className='relative image-container'>
                    <Image className='h-40 w-full' src={img3} alt='shop'></Image>
                    <h3 className='absolute top-16 left-1/4 text-3xl text-white hover:cursor-pointer'>Cleaner</h3>
                </div>
                <div className='relative image-container'>
                    <Image className='h-40 w-full' src={img4} alt='shop'></Image>
                    <h3 className='absolute top-16 left-1/4 text-3xl text-white hover:cursor-pointer'>Cleaner</h3>
                </div>
                <div className='relative image-container'>
                    <Image className='h-40 w-full' src={img1} alt='shop'></Image>
                    <h3 className='absolute top-16 left-1/4 text-3xl text-white hover:cursor-pointer'>Cleaner</h3>
                </div>
                <div className='relative image-container'>
                    <Image className='h-40 w-full' src={img6} alt='shop'></Image>
                    <h3 className='absolute top-16 left-1/4 text-3xl text-white hover:cursor-pointer'>Cleaner</h3>
                </div>
                <div className='relative image-container'>
                    <Image className='h-40 w-full' src={img2} alt='shop'></Image>
                    <h3 className='absolute top-16 left-1/4 text-3xl text-white hover:cursor-pointer'>Cleaner</h3>
                </div>
            </div>
        </div>
    );
};

export default ShopBy;