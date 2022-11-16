import * as React from 'react';

export interface TryInfo {
  try: string;
  result: string;
}

const Try = ({ tryInfo }: { tryInfo: TryInfo }) => {
  return (
    <li className="mx-auto my-3 rounded-2xl border-2 border-[#5061b3] px-3 py-2">
      <div className="font-black">{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;

// const Try = ({tryInfo})

// const Try = ({tryInfo}: {tryInfo: TryInfo})

//Try: FunctionComponent Try는 함수형 컴포넌트

//제네릭이 넣어주고
