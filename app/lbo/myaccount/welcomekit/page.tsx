'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import { Card, Button,  } from "flowbite-react";
import {Dialog} from 'primereact/dialog';
import { PiShoppingCartFill } from "react-icons/pi";

export default function WelcomeKit() {

const [visible, setVisible] = useState(false)


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="w-full pl-64 pr-12">

              <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Welcome Kit</h3>
                <br/>
                <br/>
              <h4 className="font-bold pl-8 text-2xl text-indigo-900">Welcome Letter</h4>
              <div className="border-2 ml-8 border-indigo-950">

              <div className="grid grid-cols-2 items-center pl-8">
                    <img src='/logo.png' width={200} alt='Lifeis Speed Logo'/>
                    <p>
                        Lifeis Speed Pvt Ltd<br/>
                        330, 3rd Floor, Ijmima Complex, Mind Space, Malad West, Mumbai - 400064,<br/>
                        Contact No: +91 740 003 1023<br/>
                        Email ID: contact@lifeisspeed.com<br/>
                        URL: https://lifeisspeed.in/<br/>
                    </p>
              </div>
              <div className="border-t-2 pl-8 border-indigo-950">
                Dear Gabriela Kamei,<br/>
                ID : LBO5239095<br/>
                DOJ : 02/01/2025<br/>
                Address : 101, Madina Apartments, Tere Gali, Near Jama Masjid, Andheri West, Mumbai, Mumbai, Maharashtra<br/>
                City : Mumbai<br/>
                Pin code : 400061<br/>
                User Name : LBO5239095<br/>
                <hr className="border my-4 border-indigo-950"/>
                <p className="text-indigo-800 font-bold">
                    Congratulations on your decision!
                </p>
                <br/>
                <p>
                A journey of a thousand miles must begin with a single step. I’d like to welcome you to Lifeis Speed Pvt Ltd. We are excited that you have accepted our business offer and agreed upon your start date. I trust that this letter finds you mutually excited about your new opportunity with Lifeis Speed Pvt Ltd.
                </p>
                <br/>
                <p>
                Each of us will play a role to ensure your successful integration into the company. Your agenda will involve planning your orientation with company and setting some initial work goals so that you feel immediately productive in your new role. And further growing into an integral part of this business.e providing you an opportunity to earn money which is optional, your earnings will depend directly in the amount of efforts you put to develop your business. Again, welcome to the team. If you have questions prior to your start date, please call me at any time, or send email if that is more convenient. We look forward to having you come onboard. The secret of success is constancy to purpose.
                </p>
                <br/>
                <p className="text-indigo-800 font-bold">ALL THE BEST, SEE YOU AT TOP !!</p>
                <br/>
                <p>
                  Winning Regards,
                </p>
                <p>Chief Admin Officer</p>
                <p>Lifeis Speed Pvt. Ltd.</p>

              </div>
              </div>

<br/>
<div className="grid grid-cols-2">
              <h4 className="font-bold pl-8 text-2xl text-indigo-900">Receipt</h4>
              <h4 className="font-bold pl-8 text-2xl text-indigo-900">ID Card</h4>

</div>
              <div className="grid grid-cols-2">
              <div className="border-2 ml-8 border-indigo-950">

              <div className="grid grid-cols-2 items-center pl-8">
                    <img src='/logo.png' width={200} alt='Lifeis Speed Logo'/>
                    <p>
                        Lifeis Speed Pvt Ltd<br/>
                        330, 3rd Floor, Ijmima Complex, Mind Space, Malad West, Mumbai - 400064,<br/>
                        Contact No: +91 740 003 1023<br/>
                        Email ID: contact@lifeisspeed.com<br/>
                        URL: https://lifeisspeed.in/<br/>
                    </p>
              </div>
              <div className="border-t-2 pl-8 border-indigo-950 grid grid-cols-2">
               <div className="border-b border-indigo-950">
                <p>Receipt No.</p>
                <p>ID.</p>
                <p>Name.</p>
                <p>Package Name.</p>
                <p>Package Amount.</p>
                <p>Date Of Joining.</p>
               </div>

               <div className="border-b border-indigo-950">

                  <p>10000654</p>
                  <p>LBO10000654</p>
                  <p>Gabriela Kamei</p>
                  <p>Regular Half Package</p>
                  <p>Regular Half Package</p>
                  <p>₹ 6000</p>
                  <p>1 Jan 2025</p>
               </div>
              </div>
              </div>

              <div className="border-2 ml-8 border-indigo-950 justify-center flex">
                <div className="w-3/4 border-b-gray-400 justify-center justify-items-center items-center flex flex-col border-t-4 mt-4 border border-indigo-950">
                  <img src='/logo.png' alt="profile" width={100} className="rounded-4xl" />
                  <div className="bg-amber-600 rounded-4xl p-4 text-white">
                    Profile
                  </div>
                  <div className="w-3/4 text-left">

                  <h4 className="text-blue-600 mt-4">IDENTITY CARD</h4>
                  <p>Name: <span className="font-bold">Gabriela Kamei</span></p><br/>
                  <p>LBO ID: <span className="font-bold">LBO12345678</span></p><br/>
                  <p>Mobile No: <span className="font-bold">9167021410</span></p><br/>
                  <p>Mobile No: <span className="font-bold">101, MAdina Apts, Versova
                  Mumbai, Maharashtra<br/></span></p><br/>
                  <p>City: <span className="font-bold">Mumbai</span></p><br/>

                  </div>
                  <div className="w-full text-white bg-indigo-950 rounded-tl-3xl rounded-tr-3xl text-center pt-4">
                  Lifeis Speed Pvt Ltd
                  330, 3rd Floor, Ijmima Complex, Mind Space, Malad West, Mumbai - 400064
                  </div>

                </div>
              </div>

              </div>
          </div>
            
        </div>
      </div>
    </>
  );
}
