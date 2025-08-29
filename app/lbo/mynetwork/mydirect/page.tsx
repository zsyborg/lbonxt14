'use client';
import { useEffect, useState } from "react";
import Sidebar from "@/app/components/NewSideNav";
import { useMember } from '@/app/context/MemberContext';
import * as XLSX from 'xlsx';



export default function IDWise() {
    
    const { member } = useMember();
    const [mydirect, setMyDirect] = useState<any[]>([]);

    
    const exportToExcel = (tableId:any, filename:any) => {
      const table = document.getElementById(tableId);
      const rows = table.querySelectorAll('tr');
      const data = [];
    
      rows.forEach((row) => {
        const rowData = [];
        row.querySelectorAll('th, td').forEach((cell) => {
          rowData.push(cell.textContent);
        });
        data.push(rowData);
      });
    
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "MyDirect");
      XLSX.writeFile(workbook, filename);
    };
    
    
    const handleExport = () => {
       exportToExcel("idwisetable", "mydirect.xlsx");
    };
    

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



    useEffect(() => {
      if (!member?.MPD_MemId) return;
      const url = "http://localhost:3001/v1/mydirect";
            const data = { memno: member?.MPD_MemId};

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(responseData => {
                // console.log(responseData);
                setMyDirect(responseData);
            })
            .catch(error => {
                console.error(error);
        });
    
     
    }, [member])
    


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-cols-1">
                <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>My Direct</h3>
              <div className="table-container">
                <table className="mydirecttable">
                  <thead className="thead sticky top-0 z-10">
                    <tr>
                      {/* <th className="">Confirm Middle Sale</th> */}
                      <th className="">ID</th>
                      <th>LBO Name</th>
                      <th>Joining Date</th>
                      <th>Confirmed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      { mydirect.map((item: any, index: number) => (
                        <>
                        <tr key={index}>
                          <td className="">{item.MemId}</td>
                          <td>{item.MPD_Name}</td>
                          <td>{formatDate(item.MJD_DOJ)}</td>
                          <td>{formatDateTime(item.MJD_DOJ)}</td>
                        </tr>
                        </>
                      )) }
                    
                  </tbody>
                </table>
              </div>
              <div className="w-full flex justify-end">
                <a href="#" onClick={handleExport}>
                  <img src="/ui/xls.png" className="w-10" />
                </a>
              </div>
          </div>

        </div>
            

      </div>
    </>
  );
}
