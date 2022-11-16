import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import Modal from '../../components/Modal';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [warning, setWarning] = useState('');
  const [score, setScore] = useState(0);
  const [chance, setChance] = useState(0);
  const inputNum = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    e => {
      e.preventDefault();

      const input = inputNum.current;
      if (parseInt(value) === first * second) {
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setResult('정답 🙆‍♂️');
        setScore(prevScore => (prevScore += 10));
        setValue('');
        input && input.focus(); //input!.focus();
      } else {
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setResult('땡 🙅‍♂️');
        setValue('');
        input && input.focus();
      }
      if (chance === 10) {
        setScore(0);
        setValue('');
        setChance(1);
      } else {
        setChance(prevChance => (prevChance += 1));
      }
    },
    [value]
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '');

    if (!onlyNumber) {
      setWarning('숫자를 입력해주세요');
    }

    setValue(onlyNumber);
  };

  return (
    <>
      <div className="grid  justify-center">
        <div className="m-3 text-center  text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          구구단 🧮
        </div>
        <div className=" grid  text-center font-extrabold">
          기회는 10번! 당신의 점수는?
        </div>
        <div className="my-10 text-center text-5xl font-extrabold text-[#124753] text-shadow-xl">
          {first} X {second} = ?
        </div>
        <div className="mt-5 text-2xl">
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputNum}
              type="text"
              value={value}
              onChange={onChangeValue}
              className=" border-4 border-[#5061b3] text-center "
            />
            <button type="submit" disabled={!value}></button>
          </form>
        </div>
        <div className="h-12">
          <div className="  text-center text-red-500">{warning}</div>
        </div>
        <div className=" m-3 h-20 text-center text-3xl font-bold">
          {result === '정답 🙆‍♂️' && (
            <div className="text-[#005dbf]">{result}</div>
          )}
          {result === '땡 🙅‍♂️' && <div className="text-[#dc4754]">{result}</div>}
        </div>

        <div className="  text-center text-3xl text-shadow-xl">
          Score: {score}
        </div>
      </div>
      {chance === 10 && <Modal gugudanScore={score} gugudan={'구구단'} />}
    </>
  );
};

export default GuGuDan;
