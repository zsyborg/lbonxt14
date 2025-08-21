'use client';
import Image from "next/image";
import SideNavbar from "@/app/components/SideNav";
import { useState, useEffect } from "react";
import CommonStats from "@/app/components/lbo/CommonStats";
import Sidebar from '@/app/components/NewSideNav';
// import { useMember } from '@/app/context/MemberContext';

export default function Dashboard(pageProps: any) {
  


  return (
    <>
      <div className="w-full items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen lg:visible md:visible xl:visible sm:visible">
            {/* <SideNavbar /> */}
            <Sidebar/>
          </div>
         
              <CommonStats />
      
            
        </div>
      </div>
    </>
  );
}
