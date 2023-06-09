import React from 'react';

const page = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-4xl font-semibold text-[#69727b] mb-5'>Contact Us</h1>

            <form className='w-3/4 mx-auto'>
                <div className='md:flex gap-10 mb-5'>
                    <div className='w-full'>
                        <label>Name</label>
                        <input className='border border-gray-400 w-full p-2' type="text" name="" id="" placeholder='name' required/>
                    </div>
                    <div className='w-full'>
                        <label>Email*</label>
                        <input className='border border-gray-400 w-full p-2' type="email" placeholder='email' required name="" id="" />
                    </div>
                </div>
                <div className='w-full mb-5'>
                    <label>Phone</label>
                    <input className='border border-gray-400 w-full p-2' type="text" placeholder='phone' name="" id="" required />
                </div>
                <div className='w-full mb-5'>
                    <label>Message</label>
                    <textarea className='border border-gray-400 w-full p-2' name="" id="" cols={30} rows={5} placeholder='message' required></textarea>
                </div>
                <div>
                    <input className='bg-[#0088cc] px-5 py-2 uppercase text-white font-medium cursor-pointer' type="submit" value='Send' />
                </div>
            </form>
        </div>
    );
};

export default page;