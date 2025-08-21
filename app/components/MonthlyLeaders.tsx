import React from 'react';

function MonthlyLeaders() {

  return (
    <>
    <div className='h-full w-full text-white' style={{backgroundColor:"#212534"}}>
            <div className="grid grid-cols-4 justify-items-center mx-auto align-middle justify-center items-center py-11">
            <h2 className='p-20 text-center'>Leaders Of The Month</h2>
            <div className="card">
    <div className="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
  </div>


   <div className="card">
    <div className="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
  </div>
  <div className="card">
    <div className="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
  </div>
            </div>
    </div>

   
    </>
  );
}

export default MonthlyLeaders;