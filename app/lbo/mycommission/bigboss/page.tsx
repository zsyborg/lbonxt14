'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import 'primereact/resources/themes/fluent-light/theme.css';



export default function BigBossRewards() {



  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="w-full pl-64">

              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8'>Big Boss Rewards</h3>
                <p className="pl-8 my-4 font-bold">
                  * N.B.: Award target are from date of joining 
                </p>
              <table className="w-full pl-8">
                <thead className="bg-indigo-950 text-white">
  <tr>
    <th>Sr. No.</th>
    <th>Award Name</th>
    <th>Status</th>
    <th>Achievement Date</th>
    <th>Required Left SV</th>
    <th>Required Right SV</th>
    <th>Actual Left SV</th>
    <th>Actual Right SV</th>
    <th>Claiming</th>
    <th>Claiming Date</th>
  </tr></thead>
<tbody className="pl-8 w-full text-center bigbosstable">
  <tr>
    <td>1</td>
    <td>Mobile</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Digital Camera</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody></table>
        </div>
        </div>
      </div>
    </>
  );
}
