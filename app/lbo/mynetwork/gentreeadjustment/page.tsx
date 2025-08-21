'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import 'primereact/resources/themes/fluent-light/theme.css';
import { FaUserLarge } from "react-icons/fa6";
import {PrimeReactProvider} from 'primereact/api';
import { OrganizationChart } from 'primereact/organizationchart';



export default function GenTreeAdj() {
    
        
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                name: 'Amy Elsner',
                title: 'LBO772631',
                date: '21-April-2023'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'LBO123456',
                        date: '21-April-2023'

                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'LBO773487',
                        date: '21-April-2023'

                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);

    
    const nodeTemplate = (node:any) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-col justify-center justify-items-center items-center">
                        <FaUserLarge className="text-amber-500"/>
                        <span className="font-bold mb-2 text-amber-500">{node.data.name}</span>
                        <span className='text-amber-500'>{node.data.title}</span>
                        <span className='text-amber-500'>{node.data.date}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };



  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="w-full pl-64">

              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8'>Generation Tree Adjustment</h3>
            
              <OrganizationChart value={data} nodeTemplate={nodeTemplate} />

        </div>
        </div>
      </div>
    </>
  );
}
