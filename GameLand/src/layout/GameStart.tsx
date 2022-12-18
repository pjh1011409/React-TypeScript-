import * as React from 'react';
import Rocket from '../assets/svg/Rocket';
const GameStart = () => {
  return (
    <div>
      <div className=" grid justify-center ">
        <div className="  col-span-5  font-mono text-3xl text-[#145d8a] text-shadow-xl">
          Please choose a game 👆
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mx-auto grid h-52 w-1/2 justify-center ">
        <Rocket />
      </div>
    </div>
  );
};

export default GameStart;
