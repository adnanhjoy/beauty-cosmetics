import Image from "next/image";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaMapMarkerAlt } from "react-icons/fa";
import payment from '../../src/assest/payment.png'
import Link from "next/link";

const Footer = () => {
    return (
        <div className="text-white" style={{ backgroundColor: '#0088cc', paddingBottom: '40px' }}>
            <div className="w-4/5 mx-auto">
                <div className="flex justify-between flex-wrap gap-5 mx-auto py-10" style={{ padding: '40px 0px' }}>
                    <div>
                        <h1 className="mb-5 text-4xl" style={{ marginBottom: '20px' }}>#Brand Image</h1>
                        <p className="w-4/5 mb-5"><small>
                            Korean Cosmetics is a successful e-commerce website. It has been running for more <br /> than 9 years and provides the best online shopping experience to our clients.
                        </small></p>
                        <span>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-between">
                        <footer>
                            <h1 style={{ marginBottom: '20px' }}>Whats About Us</h1>
                            <p><Link className="hover:underline" href=''><small>About Us</small></Link></p>
                            <p><Link className="hover:underline" href='/contact-us'><small>Contact Us</small></Link></p>
                            <p><Link className="hover:underline" href=''><small>Wholesale Inquiry</small></Link></p>
                            <p><Link className="hover:underline" href=''><small>Terms of Service</small></Link></p>
                            <p><Link className="hover:underline" href='/refund-policy'><small>Refund policy</small></Link></p>
                        </footer>
                        <footer>
                            <h1 style={{ marginBottom: '20px' }}>Customer Care</h1>
                            <p><small>Delivery Information</small></p>
                            <p><small>Privacy Policy</small></p>
                            <p><small>Terms of Service</small></p>
                        </footer>
                        <footer>
                            <h1 style={{ marginBottom: '20px' }}>Beauty is yours to define</h1>
                            <p><small>Address: # 13, Street 261, <br /> Sangkat Biong Salong, <br /> Khan Tul Kork, Phnom Penh</small></p>
                        </footer>
                    </div>

                </div>
                <hr />
                <div className='flex flex-wrap gap-5 py-10 mx-auto justify-between' style={{ padding: '40px 0px' }}>
                    <div className="flex flex-wrap justify-center gap-5 w-1/2">
                        <div>
                            <h6 className="text-center">Follow us on</h6>
                            <div className="flex mx-auto" style={{ width: '80%', marginTop: '20px' }}>
                                <FaFacebookSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaFacebookSquare>
                                <FaInstagramSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaInstagramSquare>
                                <FaTwitterSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaTwitterSquare>
                                <FaYoutubeSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaYoutubeSquare>
                            </div>
                        </div>
                        <div>
                            <h6 className="text-center">Follow us on</h6>
                            <div className="flex mx-auto" style={{ width: '80%', marginTop: '20px' }}>
                                <FaFacebookSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaFacebookSquare>
                                <FaInstagramSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaInstagramSquare>
                                <FaTwitterSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaTwitterSquare>
                                <FaYoutubeSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaYoutubeSquare>
                            </div>
                        </div>
                        {/* <div>
                        <h6 className="text-center">Follow us on</h6>
                        <div className="flex mx-auto" style={{ width: '80%', marginTop: '20px' }}>
                            <FaFacebookSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaFacebookSquare>
                            <FaInstagramSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaInstagramSquare>
                            <FaTwitterSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaTwitterSquare>
                            <FaYoutubeSquare className="text-white cursor-pointer text-3xl" style={{ marginRight: '20px' }}></FaYoutubeSquare>
                        </div>
                    </div> */}
                    </div>
                    <div className="w-1/2">
                        <Image className="max-w-full h-auto object-contain align-middle" alt="payment" src={payment} style={{ width: '500px' }} />
                    </div>
                </div>
                <p style={{ textAlign: 'end' }}><small>Developed by <a target="blank" href="https://www.bengalsoftware.com/" className="hover:underline">Bengal Software</a></small></p>
                <div className="text-center rounded bg-slate-200 mx-auto" style={{ padding: '20px' }}>
                    <p><small>© 2023 Copyright <a href="" className="hover:underline hover:text-blue-950">Sokoskins</a>. All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;