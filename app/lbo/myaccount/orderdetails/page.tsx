'use client';
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import { MemberContext, useMember } from "@/app/context/MemberContext";
import { FaEdit } from "react-icons/fa";


export default function Orders() {
  
  const [visible, setVisible] = useState(false)
  const {member} = useMember();
  const [orders, setOrders] = useState([]);

useEffect(() => {

  if (!member?.MPD_MemId) return; // Wait until member is loaded
    
  
    const url = "http://localhost:3001/v1/orders";
    const data = {memno: member.MPD_MemId};
  
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(responseData => {
        // console.log(responseData);
        setOrders(responseData);
    })
    .catch(error => {
        console.error(error);
    });
  
        
    
}, [member]);

const dateProcessor = (date: any) => {
  const newdate = new Date(date);
  return newdate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen w-full">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-cols-1 w-full">

                <h3 className='fontlight pagebar text-white text-2xl py-4 pl-8'>
                  My Orders
                </h3>
                <br/>
                <br/>

               
              {/* <Card className="w-1/4 ml-4">
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
              </Card> */}
          </div>
            
        </div>
      </div>
    </>
  );
}
