'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import { Card, Button,  } from "flowbite-react";
import {Dialog} from 'primereact/dialog';
import { PiShoppingCartFill } from "react-icons/pi";

export default function Orders() {

const [visible, setVisible] = useState(false)


  return (
    <>
      <div className="min-w-full items-center flex justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-rows-12 min-w-lvw">

              <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>
                My Orders
                </h3>
                <br/>
                <br/>
              <Card className="w-1/4 ml-4">
              <h5 className="text-2xl font-bold tracking-tight text-blue-900">
                    Order #75
                </h5>
                <p className="font-normal text-green-700 ">
                    Order Status: Processing<br/>
                    Order Date: 21-April-25<br/>
                    Order Total: ₹ 6000/-<br/>
                    Total CV: 500.00<br/>
                    Total SV: 1.00<br/>
                </p>
                <p className="font-normal text-green-700 ">
                </p>
                <Button onClick={() => setVisible(true)}>
                    Order Details
                    <PiShoppingCartFill/>
                </Button>
                <Dialog className="bg-blue-800 text-white p-8" header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
              </Card>
          </div>
            
        </div>
      </div>
    </>
  );
}
