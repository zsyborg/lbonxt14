'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

import axios from 'axios';
export const MemberContext = createContext<any>(null);

export const MemberProvider = ({ 
    children,
    member: initialMember,
    wallet: initialWallet, 
    }: {
        children: React.ReactNode;
    member: any;
    wallet: any;
  leftCount: any;
rightCount: any;
downline: any;
iddownline: any;
binaryTree: any;
bintree: any }) => {
  const [member, setMember] = useState<any>(initialMember);
  const [wallet, setWallet] = useState<any>(initialWallet);
  const [loading, setLoading] = useState<boolean>(true);
  const [downline, setDownline] = useState<any>([]);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [iddownline, setIddownline] = useState<any>([]);
  const [bintree, setBinaryTree] = useState<any>([]);
   useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      // Fetch member and wallet data
      try {
        const memberResponse = await fetch('http://localhost:3001/v1/members/667400S');
        const memberData = await memberResponse.json();
        setMember(memberData[0]);
        // console.log("Member Data:", memberData[0]);

        const walletResponse = await fetch('http://localhost:3001/v1/ewalletbalance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ memno: memberData[0].MPD_MemId }),
        });
        const walletData = await walletResponse.json();
        setWallet(walletData[0]);

            // try {
            //   const downlineResponse = await fetch('http://localhost:3001/api/downline/' + memberData[0].MPD_MemId);
            //   const downlineData = await downlineResponse.json();
            //   setDownline(downlineData);
            //   setLeftCount(downlineData.filter((item: any) => item.MDD_LeftCnt === 1).length);
            //   setRightCount(downlineData.filter((item: any) => item.MDD_RightCnt === 1).length);
            //   // console.log('Downline Count:', leftCount);
            //   // console.log('Downline Data:', downlineData);
            // } catch (error) {
              
            // }

              const url = "http://localhost:3001/v1/idwisedownline"
              const data = {"memno": String(memberData[0].MJD_MemNo)}
              axios.post(url, data)
              .then((response) => {
                console.log(response.data);
                // Assign response data to iddownline variable
                setIddownline(response.data);
                setDownline(response.data);
                setLeftCount(iddownline.filter((item: any) => item.IDD_LR === 1).length);
                setRightCount(iddownline.filter((item: any) => item.IDD_LR === 2).length);
                // console.log(iddownline);
                console.log("It works");
              })
              .catch((error) => {
                console.error(error);
              });


      } catch (error) {
        console.error('Error fetching member/wallet:', error);
      } finally {
        setLoading(false);
      }

      try {
        setLoading(true);
          console.log("Member ID:", memberData[0]);
          const url = "http://localhost:3001/v1/binarytree"
          const data = {"memno": memberData[0].MPD_MemId, "sessionid": 1234567890}
          axios.post(url, data)
          .then((response) => {
            console.log(response.data);
            setBinaryTree(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        
      } catch (error) {
        console.error('Error fetching Binary Tree Data:', error);
      } finally {
        setLoading(false);
      }



    };
    fetchData();
  }, []);


  const binaryTree = async () => {
  }
 
  


  return (
    <MemberContext.Provider value={{ member, setMember, wallet, setWallet, loading, leftCount, rightCount, downline, setDownline, iddownline, setIddownline, binaryTree, bintree, setBinaryTree }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);