'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import { PiShoppingCartFill } from "react-icons/pi";
import styles from './page.module.css';
import { MemberContext, useMember } from "@/app/context/MemberContext";
import axios from "axios";
import { FaUserLarge } from "react-icons/fa6";

         



export default function Login() {
    
    const [visible, setVisible] = useState(false)
    const {binaryTree, member, bintree, setBinaryTree, wallet} = useMember();
    const [binary, setBinary] = useState([]);
    


    useEffect(() => {
        // getbinaryTree();
        console.log(member?.MPD_MemId);
        const url = "http://localhost:3001/v1/binarytree"
        const data = {"memno": 121165, "sessionid": 121165}
        axios.post(url, data)
        .then((response) => {
            console.log(response.data.recordset);
            setBinary(response.data.recordset);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
    
    
    const getbinaryTree = async() => {
         if (binaryTree) {
            const binarytree = await binaryTree();
            console.log("Binary Tree Data:", binarytree);
        } else {
            console.log("binaryTree function is undefined");
        }
    }






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
        <div className="flex min-h-screen w-full">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow flex flex-col">
              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8 pr-8'>Binary Tree</h3>

                <div className="w-full text-center justify-items-center items-center">
                    <div className="text-center items-center justify-items-center">
                        <h4 className={styles.myh4}>667400S</h4>
                        <h4 className={styles.myh4}>29-08-2019</h4>
                        <h4 className={styles.myh4}>AVIK SINGHA</h4>
                        {/* {binary[0].SponsorName} */}
                        <img src="/images/binary/blue.png" style={{width:"50px"}} />
                        <p>|</p>
                    </div>
                    <div className="flex w-full grow flex-col justify-center items-center">
                        <hr style={{height:"2px", color:"black", width:"28%", border:"1px solid black"}}></hr>
                            {/* Second Level */}
                        <div className="flex w-full grow flex-row justify-center items-center">
                            <div className="flex flex-col basis-1/5 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                            <div className="flex flex-col basis-1/12 justify-center justify-items-center items-center">
                            </div>
                            <div className="flex flex-col basis-1/5 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/green.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                        </div>
                        {/* Third Level */}
                        <hr style={{height:"2px", color:"black", width:"39%", border:"1px solid black"}}></hr>
                     <div className="flex w-2/3 flex-row justify-center items-center">
                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/blue.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                            <div className="flex flex-col basis-1/12 justify-center justify-items-center items-center">
                            </div>
                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/black.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>667400S</h4>
                                <h4 className={styles.myh4}>29-08-2019</h4>
                                <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                <img src="/images/binary/green.png" style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                        </div>
                        <hr style={{height:"2px", color:"black", width:"46%", border:"1px solid black"}}></hr>
                        
                        
                        {/* Fourth Level */}
                        <div className="flex w-full flex-row">
                             <div className="flex flex-col basis-[21vw] justify-center justify-items-center items-center">
                            </div>
                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                </div>
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/blue.png" style={{width:"50px"}} />
                                </div>
                            </div>
                            
               

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                </div>
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/blue.png" style={{width:"50px"}} />
                                </div>
                            </div>


                            <div className="flex flex-col basis-[4vw] justify-center justify-items-center items-center">
                            </div>

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                </div>
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/blue.png" style={{width:"50px"}} />
                                </div>
                            </div>
                            

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/orange.png" style={{width:"50px"}} />
                                </div>
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                    <p>|</p>
                                    <h4 className={styles.myh4}>667400S</h4>
                                    <h4 className={styles.myh4}>29-08-2019</h4>
                                    <h4 className={styles.myh4}>AVIK SINGHA</h4>
                                    <img src="/images/binary/blue.png" style={{width:"50px"}} />
                                </div>
                            </div>
                       
                       
                       
                       
                       
                        </div>
                    </div>
                </div>
            
            {/* <OrganizationChart value={data} nodeTemplate={nodeTemplate} /> */}

        </div>


        
        </div>
      </div>
    </>
  );
}
