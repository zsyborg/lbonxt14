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
import Modal from "@/app/components/Modal";



export default function Login() {
    
    const [visible, setVisible] = useState(false)
    const [binary, setBinary] = useState([]);
    const {binaryTree, member, wallet} = useMember();
    const [selectedMember, setselectedMember] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (user:any) => {
        setselectedMember(user);
        setIsOpen(true);
        document.body.classList.add('modal-open');
    };

    const handleClose = () => {
        setIsOpen(false);
        document.body.classList.remove('modal-open');
        
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                handleClose();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
        document.removeEventListener('keydown', handleKeyDown);
        };
        
    }, [isOpen])
    
// console.log("Member Context:", member?.MPD_MemId);

    useEffect(() => {

        if (!member?.MPD_MemId) return; // Wait until member is loaded

            const url = "http://localhost:3001/v1/binarytree";
            const data = { memId: member.MPD_MemId, sessionid: member.MPD_MemId };

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(responseData => {
                // console.log(responseData);
                setBinary(responseData);
            })
            .catch(error => {
                console.error(error);
        });
       
    }, [member]);
    
    
    // function binaryDisplay({binary:any}) {
    //     const level0 = binary.find((node) => node.MemLevel === 0);
    //     const level1Left = binary.filter((node) => node.MemLevel === 1 && node.MemPosition === 'L');
    //     const level1Right = binary.filter((node) => node.MemLevel === 1 && node.MemPosition === 'R');
    //     const level2Left = binary.filter((node) => node.MemLevel === 2 && node.MemPositionWrtSponsor === 'L');
    //     const level2Right = binary.filter((node) => node.MemLevel === 2 && node.MemPositionWrtSponsor === 'R');

    // }






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


    // Helper functions to get nodes by level and position
    const getNode = (level: number, position?: string, wrtSponsor?: string) =>
        binary.find((node: any) =>
            node.MemLevel === level &&
            (position ? node.MemPosition === position : true) &&
            (wrtSponsor ? node.MemPositionWrtSponsor === wrtSponsor : true)
        );

    const getNodes = (level: number, wrtSponsor?: string) =>
        binary.filter((node: any) =>
            node.MemLevel === level &&
            (wrtSponsor ? node.MemPositionWrtSponsor === wrtSponsor : true)
        );

    const getPackageImage = (packageName?: string) => {
        if (!packageName) return "/images/binary/og/available.png";
        if (packageName.toLowerCase().includes("half")) return "/images/binary/og/half.png";
        if (packageName.toLowerCase().includes("full")) return "/images/binary/og/full.png";
        return "/images/binary/og/available.png";
    };

    
    // Level 0
    const level0 = getNode(0);
    // console.log("Level 0 Node:", level0);

    // Level 1
    const level1Left = getNode(1, 'L');
    const level1Right = getNode(1, 'R');

    // console.log('Right Node:', level1Right);

    // Level 2
    const level2Left = getNodes(2, 'L');
    const level2Right = getNodes(2, 'R');
    

if (!level1Left) return;
  // Level 2 First Left LBO - Left and Right based on Level 1 Left  
    const lvl2left = binary.filter((node: any) =>
        node.MemLevel === 2 &&
        level1Left?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );

    const lvl2right = binary.filter((node: any) =>
        node.MemLevel === 2 &&
        level1Left?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );

    // Level 2 Second Right LBO - Left and Right based on Level 1 Right  
    const lvl2left1 = binary.filter((node: any) =>
        node.MemLevel === 2 &&
        level1Right?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );

    const lvl2right1 = binary.filter((node: any) =>
        node.MemLevel === 2 &&
        level1Right?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );

//   console.log("Test Level 2 Right:", lvl2right1);

// Level 3 First Left LBO - Left and Right based on Level 2 First Left
  const lvl3firstleft = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2left[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );
  
    const lvl3firstright = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2left[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );

console.log("Test Level 3 First Left:", lvl3firstleft);

    const lvl3secondleft = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2right[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );
  
    const lvl3secondright = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2right[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );



    const lvl3thirdleft = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2left1[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );
  
    const lvl3thirdright = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2left1[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );


    const lvl3fourthleft = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2right1[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'L'
    );
  
    const lvl3fourthright = binary.filter((node: any) =>
        node.MemLevel === 3 &&
        lvl2right1[0]?.MemNo == node.AdjustedToMemNo &&
        node.MemPosition === 'R'
    );

// Level 3 Second Right LBO - Left and Right based on Level 2 First Right

//   if (level1Left) {
//   binary.forEach((n: any) => {
//     if (n.MemLevel === 2) {
//       console.log(`Node MemId: ${n.MemNo}, SponsorId: ${n.AdjustedToMemNo}, MemPositionWrtSponsor: ${n.MemPositionWrtSponsor}`);
//     }
//   });
// }


    

  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen bg-blue-200">
        <div className="flex min-h-screen w-full">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow flex flex-col">
              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8 pr-8'>Binary Tree</h3>

                <div className="w-full text-center justify-items-center items-center">
                        
                        {level0 ? (
                            <div className="text-center items-center justify-items-center level0">
                                <h4 className={styles.myh4}>{level0.MemNo}</h4>
                                <h4 className={styles.myh4}>{level0.DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{level0.MemName}</h4>
                                <img src={getPackageImage(level0.PackageName)} style={{width:"50px"}} />
                                <p>|</p>
                            </div>
                            ) : (
                        <h4 className={styles.myh4}>Loading</h4>
                            )
                        }

                        {/* {binary[0].SponsorName} */}
                    <div className="flex w-full grow flex-col justify-center items-center">
                        <hr style={{height:"2px", color:"black", width:"37%", border:"1px solid black"}}></hr>
                            {/* Second Level */}
                        <div className="flex w-full grow flex-row justify-center items-center level1">
                            {level1Left ? (
                            <div className="flex flex-col basis-1/5 justify-center justify-items-center items-center level1left">
                                <p>|</p>
                                <h4 className={styles.myh4}>{level1Left.MemNo}</h4>
                                <h4 className={styles.myh4}>{level1Left.DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{level1Left.MemName}</h4>
                                <img src={getPackageImage(level1Left.PackageName)} style={{width:"50px"}} />
                               
                               <a href="#" onClick={() => handleOpen(level1Left)}>View Details</a>
                                <Modal isOpen={isOpen} onClose={handleClose}>
                                    <div className="w-[580px] flex">
{selectedMember ? (

    <ul className="ulgeno mb-10">
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">ID</li>
            <li className="lipopCont genoval">
                {
                    selectedMember.MemNo
                }
            </li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Paid Date</li>
            <li className="lipopCont genoval">{selectedMember.DOJ_DDMMYYYY}</li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl w-25">Name</li>
            <li className="lipopCont genoval w-75">{selectedMember.MemName}</li>
            </ul>
            <ul className="ulgeno">
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Sponsor Name</li>
            <li className="lipopCont genoval">{selectedMember.SponsorName}</li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Adjusted ID</li>
            <li className="lipopCont genoval">{selectedMember.AdjustedToId}</li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Left Count</li>
            <li className="lipopCont genoval">{selectedMember.LeftCount} </li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Right Count</li>
            <li className="lipopCont genoval"> {selectedMember.RightCount}</li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Confirm Left</li>
            <li className="lipopCont genoval"> {selectedMember.ConfirmLeftCount} </li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Confirm Right</li>
            <li className="lipopCont genoval"> {selectedMember.ConfirmRightCount} </li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Left SV</li>
            <li className="lipopCont genoval"> {selectedMember.LeftBV} </li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Right SV</li>
            <li className="lipopCont genoval"> {selectedMember.RightBV} </li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Left CV</li>
            <li className="lipopCont genoval"> {selectedMember.LeftPV} </li>
            </ul>
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Right CV</li>
            <li className="lipopCont genoval"> {selectedMember.RightPV} </li>
            </ul>
        </li>
        <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Award Qualification</li>
            <li className="lipopCont genoval">
                {
                    selectedMember.AwardName ? selectedMember.AwardName : '-'
                }
            </li>
            </ul>
        </li>
        {/* <li className="liflex">
            <ul className="ulgeno">
            <li className="lipopCont genolbl">Upgrade Package</li>
            <li className="lipopCont genoval">-</li>
            </ul>
        </li> */}
        </ul>
) : (
    <p>Loading...</p>
    )}
                                    </div>

                                </Modal>
                                <p>|</p>
                            </div>

                            ) : (
                        <h4 className={styles.myh4}>Loading</h4>

                            )}
                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                            </div>
                             {level1Right ? (
                            <div className="flex flex-col basis-1/5 justify-center justify-items-center items-center level1right">
                                <p>|</p>
                                <h4 className={styles.myh4}>{level1Right.MemNo}</h4>
                                <h4 className={styles.myh4}>{level1Right.DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{level1Right.MemName}</h4>
                                <img src={getPackageImage(level1Right.PackageName)} style={{width:"50px"}} />
                               <a href="#" onClick={() => handleOpen(level1Right)}>View Details</a>

                                <p>|</p>
                            </div>

                            ) : (
                        <h4 className={styles.myh4}>Loading</h4>

                            )}
                        </div>
                        {/* Third Level */}
                        <hr style={{height:"2px", color:"black", width:"45%", border:"1px solid black"}}></hr>
                     <div className="flex w-2/3 flex-row justify-center items-center level2">

                            {lvl2left ? (
                                <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center level2left-1">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl2left[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl2left[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl2left[0].MemName}</h4>
                                <img src={getPackageImage(lvl2left[0].PackageName)} style={{width:"50px"}} />
                                {lvl2left[0] ? (
                                    <a href="#" onClick={() => handleOpen(lvl2left[0])}>View Details</a>

                                ) : ('')}

                                <p>|</p>
                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}
                           
                           {lvl2right ? (
                                <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center level2left-1">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl2right[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl2right[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl2right[0].MemName}</h4>
                                <img src={getPackageImage(lvl2right[0].PackageName)} style={{width:"50px"}} />
                                {lvl2right[0].MemName ? (
                                    <a href="#" onClick={() => handleOpen(lvl2right[0])}>View Details</a>

                                ) : ('')}

                                <p>|</p>
                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}

                            <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center">
                            </div>
                            
                           {lvl2left1 ? (
                                <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center level2left-2">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl2left1[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl2left1[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl2left1[0].MemName}</h4>
                                <img src={getPackageImage(lvl2left1[0].PackageName)} style={{width:"50px"}} />
                                {lvl2left1[0].MemName ? (
                                    <a href="#" onClick={() => handleOpen(lvl2left1[0])}>View Details</a>

                                ) : ('')}

                                <p>|</p>
                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}
                              
                        
                            {lvl2right1 ? (
                                <div className="flex flex-col basis-1/6 justify-center justify-items-center items-center level2left-2">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl2right1[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl2right1[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl2right1[0].MemName}</h4>
                                <img src={getPackageImage(lvl2right1[0].PackageName)} style={{width:"50px"}} />
                                {lvl2right1[0].MemName ? (
                                    <a href="#" onClick={() => handleOpen(lvl2right1[0])}>View Details</a>

                                ) : ('')}

                                <p>|</p>
                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}
                        </div>
                        <hr style={{height:"2px", color:"black", width:"50%", border:"1px solid black"}}></hr>
                        
                        
                        {/* Fourth Level */}
                        <div className="flex w-full flex-row justify-center justify-items-center items-center">
                             {/* <div className="flex flex-col basis-[21vw] justify-center justify-items-center items-center">
                            </div> */}
                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center level3">
                                

                            {lvl3firstleft ? (
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl3firstleft[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl3firstleft[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl3firstleft[0].MemName}</h4>
                                <img src={getPackageImage(lvl3firstleft[0].PackageName)} style={{width:"50px"}} />
                                {lvl3firstleft[0].MemName ? (
                                    <a href="#" onClick={() => handleOpen(lvl3firstleft[0])}>View Details</a>

                                ) : ('')}

                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}
                              

                            {lvl3firstright ? (
                                <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                <p>|</p>
                                <h4 className={styles.myh4}>{lvl3firstright[0].MemNo}</h4>
                                <h4 className={styles.myh4}>{lvl3firstright[0].DOJ_DDMMYYYY}</h4>
                                <h4 className={styles.myh4}>{lvl3firstright[0].MemName}</h4>
                                <img src={getPackageImage(lvl3firstright[0].PackageName)} style={{width:"50px"}} />
                                  {lvl3firstright[0].MemName ? (
                                    <a href="#" onClick={() => handleOpen(lvl3firstright[0])}>View Details</a>

                                ) : ('')}

                            </div>

                            ) : (
                                <h4 className={styles.myh4}>Loading</h4>

                            )}
                                
                            </div>
                            
               

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                   {lvl3secondleft ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3secondleft[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3secondleft[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3secondleft[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3secondleft[0].PackageName)} style={{width:"50px"}} />
                                        {lvl3secondleft[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3secondleft[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>

                                    )}
                               
                               
                                    {lvl3secondright ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3secondright[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3secondright[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3secondright[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3secondright[0].PackageName)} style={{width:"50px"}} />
                                        {lvl3secondright[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3secondright[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>
                                    )}
                            </div>


                            <div className="flex flex-col basis-[8vw] justify-center justify-items-center items-center">
                            </div>

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                {lvl3thirdleft ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3thirdleft[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3thirdleft[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3thirdleft[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3thirdleft[0].PackageName)} style={{width:"50px"}} />
                                        {lvl3thirdleft[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3thirdleft[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>

                                    )}
                               
                               
                                    {lvl3thirdright ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3thirdright[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3thirdright[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3thirdright[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3thirdright[0].PackageName)} style={{width:"50px"}} />
                                         {lvl3thirdright[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3thirdright[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>
                                    )}
                            </div>
                            

                            <div className="flex flex-row basis-[10vw] justify-center justify-items-center items-center">
                                {lvl3fourthleft ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3fourthleft[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3fourthleft[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3fourthleft[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3fourthleft[0].PackageName)} style={{width:"50px"}} />
                                         {lvl3fourthleft[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3fourthleft[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>

                                    )}
                               
                               
                                    {lvl3fourthright ? (
                                        <div className="flex flex-col basis-1/2 justify-center justify-items-center items-center">
                                        <p>|</p>
                                        <h4 className={styles.myh4}>{lvl3fourthright[0].MemNo}</h4>
                                        <h4 className={styles.myh4}>{lvl3fourthright[0].DOJ_DDMMYYYY}</h4>
                                        <h4 className={styles.myh4}>{lvl3fourthright[0].MemName}</h4>
                                        <img src={getPackageImage(lvl3fourthright[0].PackageName)} style={{width:"50px"}} />
                                        {lvl3fourthright[0].MemName ? (
                                            <a href="#" onClick={() => handleOpen(lvl3fourthright[0])}>View Details</a>

                                        ) : ('')}
                                    </div>

                                    ) : (
                                        <h4 className={styles.myh4}>Loading</h4>
                                    )}
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
