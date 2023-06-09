import React from 'react';

const page = () => {
    return (
        <div className='py-10 container mx-auto'>
            <h1 className='text-center text-4xl text-[#69727b] font-semibold mb-5'>Refund Policy</h1>
            <p className='text-[#69727b] text-justify w-full md:w-1/2 mx-auto'>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.

                To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. <br /> <br />

                To start a return, you can contact us at <span className='hover:underline font-semibold'>info@koreanskin.shop.</span> If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. <br /> <br />

                You can always contact us for any return question at <span className='hover:underline font-semibold'>info@koreanskin.shop.</span> <br /> <br />


                <span className='font-bold mb-2'>Damages and issues</span> <br />
                Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right. <br /> <br />


                
                <span className='font-bold mb-2'>Exceptions / non-returnable items</span> <br />
                Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.

                Unfortunately, we cannot accept returns on sale items or gift cards. <br /> <br />


                
                <span className='font-bold mb-2'>Exchanges</span> <br />
                The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item. <br /> <br />


                <span className='font-bold mb-2'>Refund</span> <br />
                We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund too.</p>
        </div>
    );
};

export default page;