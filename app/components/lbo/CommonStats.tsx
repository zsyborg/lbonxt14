import React, { cache, useEffect, useState } from 'react';
import Image from 'next/image';
import LBOStats from './LBOStats';
import axios from 'axios';
import { useMember } from '../../context/MemberContext';

function CommonStats() {

  const {member, wallet, loading, leftCount, rightCount, downline} = useMember();
  // const [member, setMember] = useState<any>([null])
  const [data, setData] = useState<any>([]);
  // const [downline, setDownline] = useState<any>([]);
  // const [leftCount, setLeftCount] = useState(0);
  // const [rightCount, setRightCount] = useState(0);
  // const [wallet, setWallet] = useState(0);



  useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch quote data
            const quoteResponse = await fetch('https://quotes-api-self.vercel.app/quote', {cache: 'force-cache'});
            const quoteData = await quoteResponse.json();
            setData(quoteData);
            console.log(quoteData);

            //Fetch member data
            const memberResponse = await fetch('http://localhost:3001/v1/members/667400S');
            const memberData = await memberResponse.json();
            setMember(memberData[0]);
            console.log(memberData[0]);


            const walletResponse = await fetch('http://localhost:3001/v1/ewalletbalance',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                memno: memberData[0].MPD_MemId,
              }),
            });
            const walletData = await walletResponse.json();
            setWallet(walletData[0]);
            console.log(walletData[0]);

            try {
              const downlineResponse = await fetch('http://localhost:3001/api/downline/' + memberData[0].MPD_MemId);
              const downlineData = await downlineResponse.json();
              setDownline(downlineData);
              setLeftCount(downlineData.filter((item: any) => item.MDD_LeftCnt === 1).length);
              setLeftCount(downlineData.filter((item: any) => item.MDD_RightCnt === 1).length);
              console.log('Downline Count:', leftCount);
              console.log('Downline Data:', downlineData);
            } catch (error) {
              
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        // fetchData();
        
        }, []);

    


  // Calculate downline counts before return
  const leftDownlineCount = downline.filter((item: any) => item.IDD_LR === 1).length;
  const rightDownlineCount = downline.filter((item: any) => item.IDD_LR === 2).length;
  const totalDownlineCount = leftDownlineCount + rightDownlineCount;


  if(!member || !wallet || loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
    
        {/* <div className="w-full lg:pl-64 md:pl-64 sm:pl-0 xs:pl-0 xs:pr-0 lg:pr-12 md:pr-12 pr-0 sm:pr-0"> */}
        <div className="w-full pr-0 sm:pr-0">
                
                <div className="grid grid-cols-2 py-10 pl-8">
                  <div>
                    <h3 className='text-2xl'>Welcome {member?.MPD_Name || 'NA'} - {member?.MJD_MemNo || ''}</h3>
                  </div>
                  <div className=''>
                    <p className="quote font-bold text-right">Quote of the day</p>
                    <p className="quote font-bold text-right">{data.quote}</p>
                  </div>
                </div>
                    
                <h2 className="pl-8 h-fit text-white bg-indigo-900 my-12">My Statistics</h2>
                <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 w-full pr-12 gap-8 mx-8 justify-center items-center">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-2xl text-white text-center">Paid 21-April-2025</h3>
                      <p>My Status</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">Approved</h3>
                        <p>KYC Status</p>
                      </div>
    
                    <div className="h-40 bg-red-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">
                        {totalDownlineCount}
                      </h3>
                      <p>My Downline Count</p>
                      <div className="grid grid-cols-2 gap-4 flex flex-col w-full justify-items-center text-center">
                        <div className="">
                        <h3 className="text-3xl text-white">
                          {leftDownlineCount}
                        </h3>
                          <p>Left Total</p>
                          </div>
                        <div className="">
                          <h3 className="text-3xl text-white">
                            {rightDownlineCount}
                          </h3>
                          <p>Right Total</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="h-40 bg-green-700 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">0.00</h3>
                      <p>Income Received</p>
                    </div>
    
    
                </div>
    
                <div className="grid lg:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 w-full pr-12 gap-8 mx-8 justify-center items-center mt-8">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">-</h3>
                      <p>Big Boss Reward Status</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">₹ {wallet.AccountBal}</h3>
                        <p>E-Wallet Balance</p>
                      </div>
    
    
    
                    <div className="h-40 bg-green-700 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">0.00</h3>
                      <p>Income Received</p>
                    </div>
                    <div className="h-40 bg-red-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">8</h3>
                      <p>Multiple E-Wallet Balance</p>
                      <div className="grid grid-cols-2 gap-4 flex flex-col w-full justify-items-center text-center">
                        <div className="">
                        <h3 className="text-3xl text-white">8</h3>
                          <p>Credit Note Wallet</p>
                          </div>
                        <div className="">
                          <h3 className="text-3xl text-white">8</h3>
                          <p>Repurchase Wallet</p>
                        </div>
                      </div>
                    </div>
    
                </div>
    
    
                <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 xl:grid-cols-2 w-full pr-12 gap-8 mx-8 justify-center items-center mt-8">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">21-April-2025</h3>
                      <p>Last Sign-In</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">192.168.0.1</h3>
                        <p>Last Sign-In IP</p>
                      </div>
    
                </div>
              {/* <LBOStats/> */}
              </div> {/* Container End */}
    </>
  );
}

export default CommonStats;