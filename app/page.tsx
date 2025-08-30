'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Whatis from './components/Whatis';
import WhyChooseUs from './components/WhyChooseUs';
import MonthlyLeaders from "./components/MonthlyLeaders";
import "react-image-gallery/styles/css/image-gallery.css";
import LatestAchievers from "./components/LatestAchievers";
import Header from '@/app/components/Header'
import Footer from "./components/Footer";
import axios from "axios";

// interface Products{
// name: string,
// price: number
// }


// const images = [
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001310.jpeg",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001312.jpeg",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001309.jpeg",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001311.jpeg",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001203.png",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001202.png",
// },
// {
//   original: "https://lifeisspeed.in/content/images/thumbs/0001204.png",
// },
// ];



// const pros = [
// {
//   "id": 0,
//   "Name": "Regular Half Package",
//   "description": "Description Description Description Description Description Description Description Description Description Description ",
//   "price": 4000,
//   "image": null
// },
// {
//   "id": 1,
//   "Name": "Regular Half Package",
//   "description": "Description Description Description Description Description Description Description Description Description Description ",
//   "price": 4000,
//   "image": null
// },
// {
//   "id": 2,
//   "Name": "Regular Half Package",
//   "description": "Description Description Description Description Description Description Description Description Description Description ",
//   "price": 4000,
//   "image": null
// },
// {
//   "id": 3,
//   "Name": "Regular Half Package",
//   "description": "Description Description Description Description Description Description Description Description Description Description ",
//   "price": 4000,
//   "image": null
// },
// {
//   "id": 4,
//   "Name": "Regular Half Package",
//   "description": "Description Description Description Description Description Description Description Description Description Description ",
//   "price": 4000,
//   "image": null
// }
// ]

export default function Home() {


  const [products, setProducts] = useState([]);
  const [pics, setPics] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products');
        console.log(response.data);
        setProducts(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
}, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
 <Header/>
        {/* <div className="p-0 m-0 min-w-full" >
          <img src="/slider2.jpeg" style={{minWidth:"100vw"}}/>
        </div> */}

        <div className="w-full flex px-32" style={{height:"500px"}}>
          <div className="h-full">
             <img src="/1.png" className="h-full" />
            </div>
          <div className="relative h-full" style={{left:"-220px"}}>
             <img src="/2.png" className="h-full" />
          </div>
            <div className="parallelogram pr-12 relative" style={{left:"-310px"}}>

            </div>
        </div>

      <div className="w-full sm:w-full lg:w-full">
          <img src="/sliderintro.png" className="w-full h-auto object-cover" alt="Slider Intro" />
          <div className="bg-indigo-950 w-32 text-white p-4 text-center">
            <p>Know More</p>
          </div>
      </div>
       
        <div className="container">

          <Whatis />
          <WhyChooseUs />
        </div>

        
          <MonthlyLeaders />
          <LatestAchievers />
          <Footer />

    </div>
  );
}
