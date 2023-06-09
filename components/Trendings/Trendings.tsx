import Image from "next/image";
import img1 from '../../src/assest/1.jpg'
import img2 from '../../src/assest/2.jpg'
import img3 from '../../src/assest/3.jpg'
import img4 from '../../src/assest/4.jpg'
import img5 from '../../src/assest/5.jpg'
import img6 from '../../src/assest/6.jpg'


const Trendings = () => {
    return (
        <div className="w-4/5 mx-auto">
            <h3 className="text-3xl text-center space-x-5 my-10">Trendy</h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mx-auto mt-10" >
                <div className="cursor-pointer hover:opacity-90">
                    <div className="hover:underline cursor-pointer">
                        <Image
                            src={img1}
                            className=' h-56 w-full'
                            alt="Picture of the author"
                        />
                        <p><small>Logically, Skin Multi Vitamin Daily Care Serum 50ml</small></p>
                    </div>
                    <span className="flex justify-between">
                        <p><small className="line-through">$ 42.00</small></p>
                        <p className=" text-blue-600"><small>$ 23.19</small></p>
                    </span>
                </div>
                <div className="cursor-pointer hover:opacity-90">
                    <div className="hover:underline cursor-pointer">
                        <Image
                            src={img2}
                            className=' h-56 w-full'
                            alt="Picture of the author"
                        />
                        <p><small>Logically, Skin Multi Vitamin Daily Care Serum 50ml</small></p>
                    </div>
                    <span className="flex justify-between">
                        <p><small className="line-through">$ 42.00</small></p>
                        <p className=" text-blue-600"><small>$ 23.19</small></p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Trendings;