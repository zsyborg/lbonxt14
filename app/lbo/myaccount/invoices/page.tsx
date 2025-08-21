'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";

export default function Invoices() {

const [visible, setVisible] = useState(false)


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="w-full pl-64 pr-12">

              <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>My Invoices</h3>
                <br/>
                <br/>

            <div className="grid grid-cols-6 pl-14 bg-indigo-900 text-white text-center">
                <div>Sr. No.</div>
                <div>Order No.</div>
                <div>Invoice No</div>
                <div>Order Date</div>
                <div>Invoice Date</div>
                <div>Invoice Download</div>
            </div>
              
          </div>
            
        </div>
      </div>
    </>
  );
}
