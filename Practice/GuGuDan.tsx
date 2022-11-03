import * as React from "react";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputNum = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputNum.current;
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult("정답");
      setValue("");
      input && input.focus(); //input!.focus();
    } else {
      setResult("땡");
      setValue("");
      input && input.focus();
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}
        <form onSubmit={onSubmitForm}>
          <input
            ref={inputNum}
            type="number"
            value={value}
            onChange={onChangeValue}
          />
        </form>
        <div>{result}</div>
      </div>
    </>
  );
};

export default GuGuDan;
