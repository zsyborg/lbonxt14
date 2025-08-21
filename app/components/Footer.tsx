import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import quotes from "./quotes.json";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaThreads } from "react-icons/fa6";
import ContactForm from './ContactForm';
function Footer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        // Handle the retrieved quote
        setData(data);
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
    , []);

  return (
    <>
     

<footer className="new_footer_area bg_color w-full">
            <div className="new_footer_top container justify-center flex">
                <div className="container justify-center flex ml-20">
                    <div className="grid grid-cols-5 gap-2 justify-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                                <img src="/logo.png" className='w-70' alt='Lifeis Speed Logo'/>


                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Links & Policies</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Shipping & Delivery Policy</a></li>
                                    <li><a href="#">Cancellation & Refund Policy</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help & Support</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                                {/* <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3> */}
                                <h3 className="f-title f_600 t_color f_size_18">329,330, 3rd Floor, IJMIMA Complex, Mind Space, Malad - West, Off Link Road, Behind Infiniti Mall 2, Mumbai-400064. </h3>
                                <p>
                                    Contact: +91 740 003 1023<br/>
                                    Email: <a href="mailto:contact@lifeisspeed.com">contact@lifeisspeed.com</a>
                                </p>
                                <div className="grid grid-cols-10 mt-3">
                                    <FaFacebook />
                                    <FaInstagram />
                                    <FaLinkedin />
                                    <FaThreads />
                                    <FaTwitter />

                                </div>
                            </div>
                        </div>

<div>
    Contact Form
</div>
           {/* <ContactForm/> */}
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom w-full">
                <div className="grid grid-cols-2 xl:ml-20 lg:ml-20 md:ml-10 sm:ml-5 ml-2 justify-between items-center">
                        <div className="">
                            <p className="mb-0 f_400">© Lifeis Speed Pvt. Ltd. | All rights reserved.</p>
                        </div>
                        <div className="text-right">
                            
                            {/* <p>Made with <i className="icon_heart"></i> in <a href="http://lifeisspeed.com/labs" target="_blank">Opensource Technologies</a></p> */}
                        </div>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;