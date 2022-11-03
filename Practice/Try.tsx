import * as React from "react";
import { FunctionComponent } from "react";
import { TryInfo } from "./types";

const Try = ({ tryInfo }: { tryInfo: TryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;

// const Try = ({tryInfo})

// const Try = ({tryInfo}: {tryInfo: TryInfo})

//Try: FunctionComponent Try는 함수형 컴포넌트

//제네릭이 넣어주고
