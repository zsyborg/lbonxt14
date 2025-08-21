import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, AccordionPanelProps } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import DataTable from 'react-data-table-component';
import {Chart} from 'primereact/chart';

const columns = [
	{
		name: 'Status',
		selector: (row: { status: any; }) => row.status,
		sortable: true,
	},
	{
		name: 'Left Count',
		selector: (row: { leftcount: any; }) => row.leftcount,
		sortable: true,
	},
  {
		name: 'Right Count',
		selector: (row: { rightcount: any; }) => row.rightcount,
		sortable: true,
	},
  {
		name: 'Total Count',
		selector: (row: { totalcount: any; }) => row.totalcount,
		sortable: true,
	},
];


const gencolumns = [
	{
		name: 'Status',
		selector: (row: { status: any; }) => row.status,
		sortable: true,
	},
	{
		name: 'Total Count',
		selector: (row: { leftcount: any; }) => row.leftcount,
		sortable: true,
	}
];


const gencvcolumns = [
	{
		name: 'Status',
		selector: (row: { status: any; }) => row.status,
		sortable: true,
	},
	{
		name: 'Total CV',
		selector: (row: { leftcount: any; }) => row.leftcount,
	},
  {
		name: 'Own CV',
		selector: (row: { leftcount: any; }) => row.leftcount,
	}
];



const gensvcolumns = [
	{
		name: 'Status',
		selector: (row: { status: any; }) => row.status,
		sortable: true,
	},
	{
		name: 'Total SV',
		selector: (row: { leftcount: any; }) => row.leftcount,
	},
  {
		name: 'Own SV',
		selector: (row: { leftcount: any; }) => row.leftcount,
	}
];


const gensalecolumns = [
	{
		name: 'Status',
		selector: (row: { status: any; }) => row.status,
		sortable: true,
	},
	{
		name: 'Total Sale',
		selector: (row: { leftcount: any; }) => row.leftcount,
	},
  {
		name: 'Own Sale',
		selector: (row: { leftcount: any; }) => row.leftcount,
	}
];



const datatables = [
  	{
		id: 1,
		status: 'Confirmed',
		leftcount: '2',
    rightcount: '8',
    totalcount: '3976',
	},
	{
		id: 2,
		status: 'Unconfirmed',
		leftcount: '5',
    rightcount: '12',
    totalcount: '3976',
	},
]

const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
      fontSize: '12pt'

		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
      fontSize: '12pt'
		},
	},
};

// const accoptions: AccordionPanelProps = {
//   alwaysOpen: true,
// }


function LBOStats() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        // Handle the retrieved quote
        setData(data);
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
    , []);


    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['2025'],
            datasets: [
                {
                    label: 'Unconfirm Left',
                    data: [4],
                    backgroundColor: [
                        'rgba(255, 159, 64)',
                        
                      ]
                },
                {
                  label: 'Unconfirm Right',
                  data: [2],
                  backgroundColor: [
                      'rgba(15, 59, 64)',
                      
                    ]
                },
                {
                  label: 'Unconfirm Total',
                  data: [2],
                  backgroundColor: [
                      'rgba(155, 59, 64)',
                      
                    ]
                },
                {
                  label: 'Confirmed Right',
                  data: [2],
                  backgroundColor: [
                      'rgba(155, 59, 264)',
                      
                    ]
                },
                {
                  label: 'Confirmed Left',
                  data: [2],
                  backgroundColor: [
                      'rgba(155, 259, 64)',
                      
                    ]
                },
                {
                  label: 'Confirmed Total',
                  data: [2],
                  backgroundColor: [
                      'rgba(255, 59, 24)',
                      
                    ]
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            legend:{
              display:true,
              position:'top'
            },
            responsive:true
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  return (
    <>
    
  <div className="">
    <h2 className="pl-8 h-fit bg-amber-600 my-12 text-white">LBO Section</h2>

    <Accordion className=''>
      <AccordionPanel alwaysOpen>
        <AccordionTitle>My Downline</AccordionTitle>
        <AccordionContent>
          
        <Tabs aria-label="Default tabs" variant="default">
          <TabItem active title="Count">
             <div className='grid grid-cols-1 min-w-screen'>
                <div className='basis-1/2'>
                <DataTable
                columns={columns}
                data={datatables}
                highlightOnHover={true}
                dense={true}
                responsive={true}
                customStyles={customStyles}
              />
  
              <div className='grid grid-cols-5 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today Count</span>
                <span>Week Count</span>
                <span>Month Count</span>
                <span>Year Count</span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
                <span>
                  <p>Left Count: 0</p>
                  <p>Right Count: 0</p>
                  <p>Total Count: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>


          </TabItem>


{/* **************** */}
{/* **************** */}
{/* CV */}
{/* **************** */}
{/* **************** */}



          <TabItem title="CV" >
          <div className='flex'>
                <div className='basis-1/2'>
                  <DataTable
                  columns={columns}
                  data={datatables}
                  highlightOnHover={true}
                  dense={true}
                  responsive={true}
                  customStyles={customStyles}
                />

              <div className='grid grid-cols-5 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today CV</span>
                <span>Week CV</span>
                <span>Month CV</span>
                <span>Year SV</span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>

{/* **************** */}
{/* **************** */}
{/* SV */}
{/* **************** */}
{/* **************** */}



        <TabItem title="SV" >
          <div className='flex'>
                <div className='basis-1/2'>
                <DataTable
                columns={columns}
                data={datatables}
                highlightOnHover={true}
                dense={true}
                responsive={true}
                customStyles={customStyles}
              />

              <div className='grid grid-cols-5 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today SV</span>
                <span>Week SV</span>
                <span>Month SV</span>
                <span>Year SV</span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Left SV: 0</p>
                  <p>Right SV: 0</p>
                  <p>Total SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>Left SV: 0</p>
                  <p>Right SV: 0</p>
                  <p>Total SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>Left SV: 0</p>
                  <p>Right SV: 0</p>
                  <p>Total SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>Left SV: 0</p>
                  <p>Right SV: 0</p>
                  <p>Total SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                <p>Left CV: 0</p>
                  <p>Right CV: 0</p>
                  <p>Total CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>
         
{/* **************** */}
{/* **************** */}
{/* Sale */}
{/* **************** */}
{/* **************** */}
         
       

          <TabItem title="Sale" >
          <div className='flex'>
                <div className='basis-1/2'>
                <DataTable
                columns={columns}
                data={datatables}
                highlightOnHover={true}
                dense={true}
                responsive={true}
                customStyles={customStyles}
              />

              <div className='grid grid-cols-5 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Left Sale</span>
                <span>Right Sale</span>
                <span>Total Sale</span>
                <span>Own Sale</span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                  <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                  <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                  <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
              </div>
              <div className='grid grid-cols-5 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
                <span>
                <p>Left Sale</p>
                  <p>Right Sale</p>
                  <p>Total Sale</p>
                  <p>Own Sale</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>
        </Tabs>

        </AccordionContent>
      </AccordionPanel>





      <AccordionPanel alwaysOpen={true} isOpen={true} >
        <AccordionTitle>My Generation Downline</AccordionTitle>
        <AccordionContent>
          

                   
        <Tabs aria-label="Default tabs" variant="default">
          <TabItem active title="Count">
             <div className='flex'>
                <div className='basis-1/2'>
                <DataTable
                  columns={gencolumns}
                  data={datatables}
                  highlightOnHover={true}
                  dense={true}
                  responsive={true}
                  customStyles={customStyles}
                />

              <div className='grid grid-cols-6 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today Count</span>
                <span>Week Count</span>
                <span>Month Count</span>
                <span>Year Count</span>
                <span>All Count</span>
                
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Count: 0</p>
                  
                </span>
                <span>
                  <p>Count: 0</p>
                </span>
                <span>
                  <p>Count: 0</p>
                </span>
                <span>
                <p>Count: 0</p>
                </span>
                <span>
                <p>Count: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                  <p>Count: 0</p>
                </span>
                <span>
                  <p>Count: 0</p>
                </span>
                <span>
                <p>Count: 0</p>

                </span>
                <span>
                <p>Count: 0</p>
                </span>
                <span>
                <p>Count: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>


          </TabItem>


{/* **************** */}
{/* **************** */}
{/* CV */}
{/* **************** */}
{/* **************** */}



          <TabItem title="CV" >
          <div className='flex'>
                <div className='basis-1/2'>
                  <DataTable
                  columns={gencvcolumns}
                  data={datatables}
                  highlightOnHover={true}
                  dense={true}
                  responsive={true}
                  customStyles={customStyles}
                />

              <div className='grid grid-cols-6 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today CV</span>
                <span>Week CV</span>
                <span>Month CV</span>
                <span>Year CV</span>
                <span>All CV</span>

              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
                <span>
                  <p>CV: 0</p>
                  <p>Own CV: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>

{/* **************** */}
{/* **************** */}
{/* SV */}
{/* **************** */}
{/* **************** */}



        <TabItem title="SV" >
          <div className='flex'>
                <div className='basis-1/2'>
                <DataTable
                columns={gensvcolumns}
                data={datatables}
                highlightOnHover={true}
                dense={true}
                responsive={true}
                customStyles={customStyles}
              />

              <div className='grid grid-cols-6 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today SV</span>
                <span>Week SV</span>
                <span>Month SV</span>
                <span>Year SV</span>
                <span>All SV</span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>SV: 0</p>
                <p>Own SV: 0</p>
                </span>
                <span>
                <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                  <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                  <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                  <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
                <span>
                  <p>SV: 0</p>
                  <p>Own SV: 0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>
         
{/* **************** */}
{/* **************** */}
{/* Sale */}
{/* **************** */}
{/* **************** */}
         
       

          <TabItem title="Sale" >
          <div className='flex'>
                <div className='basis-1/2'>
                <DataTable
                columns={gensalecolumns}
                data={datatables}
                highlightOnHover={true}
                dense={true}
                responsive={true}
                customStyles={customStyles}
              />

              <div className='grid grid-cols-6 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today Sale</span>
                <span>Week Sale</span>
                <span>Month Sale</span>
                <span>Year Sale</span>
                <span>Total Sale</span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Confirmed</span>
                <span>
                  <p>Sale: </p>
                  <p>Own Sale: </p>
                </span>
                <span>
                  <p>Sale: </p>
                  <p>Own Sale: </p>
                </span>
                <span>
                <p>Sale: </p>
                <p>Own Sale: </p>
                </span>
                <span>
                <p>Sale: </p>
                <p>Own Sale: </p>
                </span>
                <span>
                  <p>Sale: </p>
                  <p>Own Sale: </p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Unconfirmed</span>
                <span>
                <p>Sale: </p>
                <p>Own Sale: </p>
                </span>
                <span>
                <p>Sale: </p>
                <p>Own Sale: </p>
                </span>
                <span>
                <p>Sale: </p>
                <p>Own Sale: </p>
                </span>
                <span>
                  <p>Sale: </p>
                  <p>Own Sale: </p>
                </span>
                <span>
                  <p>Sale: </p>
                  <p>Own Sale: </p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>

          </TabItem>
        </Tabs>



        </AccordionContent>
      </AccordionPanel>


      
      <AccordionPanel>
        <AccordionTitle>My Commission</AccordionTitle>
          <AccordionContent>
            <h2>LBO Payout</h2>
          <div className='flex'>
                <div className='basis-1/2 '>
                <DataTable
                  columns={gencolumns}
                  data={datatables}
                  highlightOnHover={true}
                  dense={true}
                  responsive={true}
                  customStyles={customStyles}
                />

              <div className='grid grid-cols-6 mytable bg-white px-4 py-4 mt-8'>
                <span>Status</span>
                <span>Today Amount</span>
                <span>Week Amount</span>
                <span>Month Amount</span>
                <span>Year Amount</span>
                <span>Total Amount</span>
                
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Gross</span>
                <span>
                  <p>0</p>
                  
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                <p> 0</p>
                </span>
                <span>
                <p>0</p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Total Deduction</span>
                <span>
                  <p>0</p>
                  
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                <p> 0</p>
                </span>
                <span>
                <p>0</p>
                </span>
              </div>
              <div className='grid grid-cols-6 mytable bg-white px-4 py-2'>
                <span>Net Payable</span>
                <span>
                  <p>0</p>
                  
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                  <p> 0</p>
                </span>
                <span>
                <p> 0</p>
                </span>
                <span>
                <p>0</p>
                </span>
              </div>

                </div>

                <div className='basis-1/2'>
                  <Chart type='bar' data={chartData} options={chartOptions}  />
                </div>
             </div>
          </AccordionContent>
        </AccordionPanel>
    </Accordion>
                

              </div> {/* Container End */}
    </>
  );
}

export default LBOStats;