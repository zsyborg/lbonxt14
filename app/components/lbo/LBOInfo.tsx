import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// import { FileInput, HelperText, Label, TextInput, Dropdown, select, Radio, Button, Card } from "flowbite-react";
import { Button, TextField, Input, Select, MenuItem, InputLabel, FormControl} from '@mui/material';

import axios from 'axios';
import countries from '@/app/components/data/countries.json';
import { LuSave } from 'react-icons/lu';
import { FaPrint } from 'react-icons/fa6';
import { AiFillEdit } from 'react-icons/ai';
// import {Dialog} from 'primereact/dialog';
import { MdAddCircle } from 'react-icons/md';
import { useMember } from '@/app/context/MemberContext';

function LBOInfo() {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    // const [nomDay, setNomDay] = useState('');
    // const [nomMonth, setNomMonth] = useState('');
    // const [nomYear, setNomYear] = useState('');

    const [countryCode, setCountryCode] = useState('');
    const [visible, setVisible] = useState(false)
    const { member, wallet, loading } = useMember();
    // const handleCountryChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setCountryCode(e.target.value);
    // };

    const days = Array.from({length: 31}, (_, i) => i + 1)
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const years = Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i);
    
    //   const handleDayChange = (e) => {
    //     setDay(e.target.value);
    //   };
    
    //   const handleMonthChange = (e) => {
    //     setMonth(e.target.value);
    //   };
    
    //   const handleYearChange = (e) => {
    //     setYear(e.target.value);
    //   };

 const handleChangeDay = (event: any) => {
    setDay(event.target.value);
  };

  const handleChangeMonth = (event: any) => {
    setMonth(event.target.value);
  };

  const handleChangeYear = (event: any) => {
    setYear(event.target.value);
  };


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:3001/v1/scrap');
//             const dob = response.data[0].DateOfBirth;
//             const newdob = new Date(dob);
//             const day = newdob.getDate();
//             const month = newdob.getMonth() + 1; // Months are 0-based
//             const year = newdob.getFullYear();
//             console.log(day + month + year);

//             setDay(day.toString());
//             setMonth(month.toString());
//             setYear(year.toString());
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     fetchData();
// }, []);

// Birth Dates
    // if (!member) return;
    const dob = member?.MPD_DOB;
    const newdob = new Date(dob);
    const dayed = newdob.getDate();
    const monthdat = newdob.getMonth() + 1; // Months are 0-based
    const yeardat = newdob.getFullYear();
    // setDay(dayed.toString());
    // setMonth(monthdat.toString());
    // setYear(yeardat);
    console.log(member?.MPD_Country);

    const nomdob = member?.MPD_nomBdate;
    const newnomdob = new Date(nomdob);
    const nomdayed = newnomdob.getDate();
    const nommonth = newnomdob.getMonth() + 1;
    const nomyear = newnomdob.getFullYear();



          type FormDataState = {
            file: File | null;
            name: string;
        };

          const [formData, setFormData] = useState({
            file: null,
            name: '',
          });
          const [uploading, setUploading] = useState(false);
        
          const handleFileChange = (event:any) => {
            if (event.target.files && event.target.files[0]) {
                setFormData({ ...formData, file: event.target.files[0] });
            }
          };
        
          const handleInputChange = (event:any) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
          };
        
          const handleSubmit = async (event:any) => {
            event.preventDefault();
            setUploading(true);
        
            const data = new FormData();
            if (formData.file) {
                data.append('file', formData.file);
            }

            data.append('name', formData.name);
        
            try {
              const response = await fetch('http://localhost:3001/v1/profilepic', {
                method: 'POST',
                body: data,
              });
        
              if (response.ok) {
                console.log('Form submitted successfully!');
              } else {
                console.error('Error submitting form:', response.statusText);
              }
            } catch (error) {
              console.error('Error submitting form:', error);
            } finally {
              setUploading(false);
            }
          };

  return (
    <>
    
    <div className="w-full">

        <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Your Personal Details</h3>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-3 gap-8 py-4 pl-8'>
                    <div>
                        <p>Profile Picture</p>
                        <img src="/logo.png"width={80} alt='Profile Picture' />
                        <div id="fileUpload" className="max-w-md">
                            <label className="mb-2 block" htmlFor="file">
                                Upload file
                            </label>
                            {/* <FileInput id="file" onChange={handleFileChange} /> */}
                            <p className="mt-1">A profile picture is useful to confirm your are logged into your account</p>
                            <p>
                                * N.B.: Image size should not exceed than 4 MB and Image format should be .PNG, .JPG and .JPEG 
                            </p>
                            <br/>
                            <div>
                                <p className='font-bold'>Date Of Birth</p>
                                <div className='grid grid-cols-3'>
                                    
                                      {/* <InputLabel id="demo-simple-select-helper-label">Day</InputLabel> */}
                                        <select id="demo-simple-select-helper" value={dayed} onChange={handleChangeDay}>
                                            {days.map((m, i) =>(
                                                <option key={m} value={i + 1} >{m}</option>
                                            ))}
                                        </select>
                                    
                                    
                                      {/* <InputLabel id="month">Month</InputLabel> */}
                                        <select id='monthsel' value={monthdat} onChange={handleChangeMonth}>
                                            {months.map((m, i) =>(
                                                <option key={m} value={i + 1} >{m}</option>
                                            ))}
                                        </select>
                                    
                                    
                                      {/* <InputLabel id="year">Year</InputLabel> */}
                                        <select id='yearsel' value={yeardat} onChange={handleChangeYear}>
                                            {years.map((m, i) =>(
                                                <option key={m} value={m} >{m}</option>
                                            ))}
                                        </select>
                                    
                                </div>
                                <br/>
                                <p className='font-bold'>Email</p>
                                    {/* <TextField className='mb-6' type='email' label='Email' defaultValue={member?.MPD_Email} onChange={handleInputChange} */}
                                    {/* InputLabelProps={{ shrink: true }} inputMode='email'/> */}
                                    <input type='email' value={member?.MPD_Email} />
                                    <br/>
                                    <div className='grid grid-cols-2'>
                                
                                <p>Phone</p><br/>
                                <select className='w-40' value={member?.MPD_Country}>
                                    {countries.map((country) => (
                                        <option key={country.name} value={country.name} selected={member?.MPD_Country}>
                                            {country.dial_code} - {country.name}
                                        </option>
                                    ))}
                                </select>
                                <input type='number' className='w-48' value={member?.MPD_Mobile}/>
                              
                                    </div>
                                    <br/>
                                    <p className='font-bold'>Withdrawal Options</p>
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <input type='radio' name='withdrawal' value="0" checked={member?.MPD_AutoORmanualWithdrawal === 0} />
                                            <label htmlFor="withdrawal">Manual</label>
                                        </div>
                                        <div>
                                            <input type='radio' name='withdrawal' value="1" checked={member?.MPD_AutoORmanualWithdrawal === 1}/>
                                            <label htmlFor="withdrawal">Auto</label>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                        <div>
                            {/* <p>Username: {member?.MPD_Name}</p><br/> */}
                            <p>LBO Number: {member?.MJD_MemNo}</p><br/>
                            <p>Full Name: {member?.MPD_Name}</p><br/>
                            <p>Payment Type: E-Pin</p><br/>
                            <p>Joining/Upgrade Amount: E-Pin</p><br/>
                            <br/>
                            <h4 className='font-bold'>Nominee Details</h4>
                            <input placeholder='Nominee Name' value={member?.MPD_nomName}/>
                            <br/>
                            <p className='font-bold'>Nominee Date Of Birth</p>
                                <div className='grid grid-cols-3'>
                                    <select value={nomdayed}>
                                        {days.map((m, i) =>(
                                            <option key={m} value={i + 1}>{m}</option>
                                        ))}
                                    </select>
                                    <select value={nommonth}>
                                        {months.map((m, i) =>(
                                            <option key={m} value={i + 1}>{m}</option>
                                        ))}
                                    </select>
                                    <select value={nomyear}>
                                        {years.map((m, i) =>(
                                            <option key={m} value={m}>{m}</option>
                                        ))}
                                    </select>
                                </div>
                            <p className='font-bold'>Nominee Relation</p>
                            <select value={member?.MPD_nomRel}>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Husband">Husband</option>
                                <option value="Wife">Wife</option>
                                <option value="Son">Son</option>
                                <option value="Father-In-Law">Father-In-Law</option>
                                <option value="Mother-In-Law">Mother-In-Law</option>
                                <option value="Brother-In-Law">Brother-In-Law</option>
                                <option value="Sister-In-Law">Sister-In-Law</option>
                                <option value="Nephew">Nephew</option>
                                <option value="Uncle">Uncle</option>
                                <option value="Aunt">Aunt</option>
                            </select>
                            <div className='grid grid-cols-1 gap-8'>
                                
                                {/* <button type='submit' disabled={uploading} color='green' className='text-white mt-8'><LuSave className='mr-2'/> {uploading ? 'Saving...' : 'Save'}</button>
                                <button color='blue' className='text-white mt-8'><FaPrint className='mr-2'/>Preview</button> */}
                                <br/>
                                <Button className='mt-40' variant="contained">Save</Button>
                            </div>
                        </div>
                        <div>
                            <p>
                            Address: {member?.MPD_Address || 'NA'}
                            </p><br/>
                            <p>Zip/Postal Code: {member?.MPD_PinCode || 'NA'}</p><br/>
                            <p>City: {member?.MPD_City || 'NA'}</p><br/>
                            <p>State: {member?.MPD_State || 'NA'}</p><br/><br/>
                            <p className='font-bold'>Change Password</p>
                            <input className='mb-4' type='password' placeholder='Old Password'/><br/>
                            <input className='mb-4' type='password' placeholder='New Password'/><br/>
                            <input className='mb-4' type='password' placeholder='Confirm Password'/>
                        </div>
                </div>
                        </form>


                
                <div className='bg-indigo-900 text-white w-full grid grid-cols-2'>
                    <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Manage My Addresses</h3>
                        {/* <div className='justify-end text-right'>
                        <div className='grid grid-cols-1 justify-end text-right h-full pr-4 items-center content-center relative'>
                            <p>
                                <MdAddCircle className='inline-block'/>Add Address
                            </p>
                        </div>
                        </div> */}
                </div>

        </div>
          
    </>
  );
}

export default LBOInfo;