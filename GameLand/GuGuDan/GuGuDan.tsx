import * as React from 'react';
import { useState, useRef } from 'react';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputNum = useRef<HTMLInputElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputNum.current;
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult('정답');
      setValue('');
      input && input.focus(); //input!.focus();
    } else {
      setResult('땡');
      setValue('');
      input && input.focus();
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <div className="m-3 grid content-start justify-center text-3xl font-black">
          구구단 🧮
        </div>
        <br />
        <div>
          <div className="m-3 grid h-16 justify-center text-3xl">
            {first} X {second} = ?
          </div>
          <br />
          <div className="m-3 grid h-16 justify-center text-2xl">
            <form onSubmit={onSubmitForm}>
              <input
                ref={inputNum}
                type="text"
                value={value}
                onChange={onChangeValue}
                className="m-3 border-4 border-red-500 bg-blue-900"
              />
              <input className=" m-3 font-black" type="submit" value="GO " />
            </form>
          </div>
          <div className="grid h-[200px] justify-center">
            <br />
            <div className=" text-3xl">{result}</div>
          </div>
          <br />
          <br />
          <br />
          <div className="grid ">
            <div className=" text-3xl">Score: </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuGuDan;
