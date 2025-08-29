'use client';
import { useEffect, useState } from "react";
import Sidebar from "@/app/components/NewSideNav";
import { useMember } from '@/app/context/MemberContext';
         



export default function IDWise() {
    
    const { member, iddownline } = useMember();
    const [mydownline, setMyDownline] = useState<any[]>([]);


useEffect(() => {
         const totals = iddownline.reduce((acc:any, current:any) => {
            acc.LeftSale += current.LeftSale;
            acc.RightSale += current.RightSale; 
            acc.OwnSale += current.OwnSale; 
            acc.LeftCount += current.LeftCount; 
            acc.RightCount += current.RightCount;
            acc.RightCV += current.RightCV;
            acc.LeftCV += current.LeftCV;
            console.log(acc);
            return acc;
        }, {
            LeftSale: 0,
            RightSale: 0,
            OwnSale: 0,
            LeftCount: 0,
            RightCount: 0,
            LeftCV: 0,
            RightCV: 0
            
        });
}, [iddownline])


    function formatDateTime(sqlDate: string) {
      if (!sqlDate) return "";
      const date = new Date(sqlDate);

      // Get day, month, year
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-based
      const year = date.getFullYear();

      // Get hours and minutes
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12

      return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
    }


    function formatDate(sqlDate: string) {
      if (!sqlDate) return "";
      const date = new Date(sqlDate);

      // Get day, month, year
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-based
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }



    // useEffect(() => {
    //   if (!member?.MPD_MemId) return;
    //   const url = "http://localhost:3001/v1/mydownline";
    //         const data = { CustomerID: member?.MPD_MemId, CustomerType: 4, INRCurrencyRate: 0, BusinessType: 4};

    //         fetch(url, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(data),
    //         })
    //         .then(res => res.json())
    //         .then(responseData => {
    //             setMyDownline(responseData);
    //             console.log(responseData[0]);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //     });
    
     
    // }, [member])
    


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-cols-1">
                <h3 className='fontlight bg-indigo-900 text-white text-2xl py-2 mb-2 pl-8'>My Downline</h3>
              <div className="table-container">
                <table>
                  <thead className="thead sticky top-0 z-10">
                    <tr>
                      {/* <th className="">Confirm Middle Sale</th> */}
                      <th className="">ID</th>
                      <th>Left Count</th>
                      <th>Right Count</th>
                      <th>Confirmed Left Count</th>
                      <th>Confirmed Right Count</th>
                      <th>Total Left CV</th>
                      <th>Total Right CV</th>
                      <th>Confirmed Left CV</th>
                      <th>Confirmed Right CV</th>
                      <th>Total Left SV</th>
                      <th>Total Right SV</th>
                      <th>Confirmed Left SV</th>
                      <th>Confirmed Right SV</th>
                      <th>Left Sale</th>
                      <th>Right Sale</th>
                      <th>Confirmed Left Sale</th>
                      <th>Confirmed Right Sale</th>
                      <th>Own CV</th>
                      <th>ConfirmedOwn CV</th>
                      <th>Own SV</th>
                      <th>ConfirmedOwn SV</th>
                      <th>Own Sale</th>
                      <th>Confirmed Own Sale</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {/* { mydownline[1].map((item: any, index: number) => (
                        <>
                        <tr key={index}>
                          <td className="">{item.MemId}</td>
                          <td>{item.MPD_Name}</td>
                          <td>{formatDate(item.MJD_DOJ)}</td>
                          <td>{formatDateTime(item.MJD_DOJ)}</td>
                        </tr>
                        </>
                      )) } */}
                    
                  </tbody>
                </table>
              </div>
                          {/* <h3 className='fontlight bg-indigo-900 text-white text-2xl py-2 mb-2 pl-8'>My Downline</h3> */}

              <div className="table-container">
                <table>
                  <thead className="thead sticky top-0 z-10">
                    <tr>
                      {/* <th className="">Confirm Middle Sale</th> */}
                      <th className="">ID</th>
                      <th>Name</th>
                      <th>Joining Package</th>
                      <th>Current Package</th>
                      <th>Status</th>
                      <th>DOJ</th>
                      <th>Confirm Date</th>
                      <th>Level</th>
                      <th>Sponsor ID</th>
                      <th>Position W.R.T. Sponsor</th>
                      <th>Adjusted To ID</th>
                      <th>Position W.R.T Me</th>
                      <th>State</th>
                      <th>City</th> 
                      <th>Confirmed Left SV</th>
                      <th>Confirmed Right SV</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      { iddownline.map((item: any, index: number) => (
                        <>
                        <tr key={index}>
                          <td className="">{item.LBOID}</td>
                          <td>{item.DownlineLBOName}</td>
                          <td>{item.PackageName}</td>
                          <td>{item.PackageName}</td>
                          <td></td>
                          <td>{formatDateTime(item.DOJ)}</td>
                          <td>{formatDateTime(item.DOJ)}</td>
                          <td>Level</td>
                          <td>{item.SponsorID}</td>
                          <td></td>
                          <td>{item.AdjsutedID}</td>
                        </tr>
                        </>
                      )) }
                    
                  </tbody>
                </table>
              </div>
          </div>
          <div className="grow grid-cols-1">
          </div>

        </div>
            

      </div>
    </>
  );
}
