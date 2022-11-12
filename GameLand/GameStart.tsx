import * as React from 'react';
import Rocket from './assets/roket';

const GameStart = () => {
  return (
    <>
      <div className="grid justify-center">
        <div className="  col-span-5  font-mono text-3xl">
          Please choose a game ⬆️
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mx-auto grid h-52 w-1/2 justify-center ">
        <Rocket />
      </div>
    </>
  );
};

export default GameStart;
