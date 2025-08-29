'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useMember } from '@/app/context/MemberContext';
import * as XLSX from 'xlsx';         



export default function IDWise() {
    
    const { iddownline } = useMember();



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
  XLSX.utils.book_append_sheet(workbook, worksheet, "ID Wise Downline");
  XLSX.writeFile(workbook, filename);
};


const handleExport = () => {
   exportToExcel("idwisetable", "id_wise_downline.xlsx");
};


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-cols-1">
                <h3 className='fontlight bg-indigo-900 text-white text-2xl py-2 pl-8'>ID-Wise Downline</h3>
              <div className="table-container">
              <table id="idwisetable" className="mytable">
                <thead className="thead sticky top-0 z-10">
                  <tr>
                    <th className="">Sr. No.</th>
                    <th className="">ID</th>
                    <th>LBO Name</th>
                    <th>Left Count</th>
                    <th>Right Count</th>
                    <th>Confirmed Left Count</th>
                    <th>Confirmed Right Count</th>
                    <th>Left CV</th>
                    <th>Right CV</th>
                    <th>Confirmed Left CV</th>
                    <th>Confirmed Right CV</th>
                    <th>Own CV</th>
                    <th>Confirmed Own CV</th>
                    <th>Left SV</th>
                    <th>Right SV</th>
                    <th>Confirmed Left SV</th>
                    <th>Confirmed Right SV</th>
                    <th>Own SV</th>
                    <th>Confirmed Own SV</th>
                    <th>Left Sale</th>
                    <th>Right Sale</th>
                    <th>Confirmed Left Sale</th>
                    <th>Confirmed Right Sale</th>
                    <th>Own Sale</th>
                    <th>Confirmed Own Sale</th>
                  </tr>
                </thead>
                
                <tbody>
                      { iddownline.map((item: any, index: number) => (
                        <>
                        <tr>
                          <td key={index} className="">{index + 1}</td>
                          <td className="">{item.IDD_DOWNID}</td>
                          <td>{item.DownlineLBOName}</td>
                          <td>{item.LeftCount}</td>
                          <td>{item.RightCount}</td>
                          <td>{item.ConfLeftCnt}</td>
                          <td>{item.ConfRightCnt}</td>
                          <td>{item.LeftCV}</td>
                          <td>{item.RightCV}</td>
                          <td>{item.ConfLeftCV}</td>
                          <td>{item.ConfRightCV}</td>
                          <td>{item.OwnCV}</td>
                          <td>{item.ConfOwnCV}</td>
                          <td>{item.LeftSV}</td>
                          <td>{item.RightSV}</td>
                          <td>{item.ConfLeftSV}</td>
                          <td>{item.ConfRightSV}</td>
                          <td>{item.OwnSV}</td>
                          <td>{item.ConfOwnSV}</td>
                          <td>{item.LeftSale}</td>
                          <td>{item.RightSale}</td>
                          <td>{item.ConfLeftSale}</td>
                          <td>{item.ConfRightSale}</td>
                          <td>{item.OwnSale}</td>
                          <td>{item.ConfOwnSale}</td>
                        </tr>
                        </>
                      ))}
                      {/* <td>
                        { iddownline.length }
                      </td> */}
                </tbody>
              </table>

              </div>
              <div className="w-full flex justify-end pr-4">
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
