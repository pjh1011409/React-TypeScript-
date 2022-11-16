import * as React from 'react';
import { FC } from 'react';

const Ball: FC<{ number: number }> = ({ number }) => {
  let background;
  if (number <= 10) {
    background = '#ff6380';
  } else if (number <= 20) {
    background = '#fca272';
  } else if (number <= 30) {
    background = '#fff894';
  } else if (number <= 40) {
    background = '#1773ac';
  } else {
    background = '#acc383';
  }
  return (
    <div
      style={{ background }}
      className="grid h-10 w-10 content-center rounded-full text-center font-bold"
    >
      {number}
    </div>
  );
};

export default Ball;
