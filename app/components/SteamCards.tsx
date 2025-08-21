'use client'
import React, { SetStateAction, useRef, useState, useEffect } from 'react'
import axios from 'axios';

function SteamCards() {

  const [productcategory, setProductCategory] = useState<any[]>([]);

  
  useEffect(() => {
    axios.get("http://localhost:3001/v1/category")
      .then((res: { data: SetStateAction<any[]>; }) => setProductCategory(res.data))
      .catch((err: any) => console.error(err));
  }, []);


  return (
    <>


        <div className="l-container">
        {productcategory.map((cat: any, idx: number) => (
          <div className="b-game-card" key={cat.id || idx}>
          <div className="b-game-card__cover" style={{backgroundImage: "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg)"}}>
            <h3 className='text-white text-2xl'>
              {cat.Name || "Category"}
            </h3>
          </div>
        </div>
        ))}
</div>    </>
  );
}

export default SteamCards;

