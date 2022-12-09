import * as React from 'react';
import { useRef, useState, useCallback, useEffect } from 'react';
import Try from './Try';
import Modal from '../../components/Modal';

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    // 랜덤 숫자 4개 중복 없이
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export interface TryInfo {
  try: string;
  result: string;
}
const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState('');
  const [warning, setWarning] = useState('');
  const [result, setResult] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [tries, setTries] = useState<TryInfo[]>([]); // 빈배열의 경우 항상 타이핑 문제가 일어난다.
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    e => {
      e.preventDefault();
      const input = inputEl.current;
      if (value === answer.join('')) {
        setTries(t => [
          ...t,
          {
            try: value,
            result: '홈런!',
          },
        ]);
        setResult(`총 ${tries.length}번만에 성공`);
        setModalOpen(true);
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        input && input.focus();
      } else {
        const answerArray = value.split('').map(v => parseInt(v));
        let strike = 0;
        let ball = 0;
        if (tries.length >= 9) {
          setResult(`답은 ${answer.join('')}`); // state set은 비동기
          setModalOpen(true);
          setValue('');
          setAnswer(getNumbers());
          setTries([]);
          input && input.focus();
        } else {
          console.log('답은', answer.join(''));
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === answer[i]) {
              console.log('strike', answerArray[i], answer[i]);
              strike += 1;
            } else if (answer.includes(answerArray[i])) {
              console.log(
                'ball',
                answerArray[i],
                answer.indexOf(answerArray[i])
              );
              ball += 1;
            }
          }
          setTries(t => [
            ...t,
            {
              try: value,
              result: `${strike} Strike, ${ball} Ball`,
            },
          ]);
          setValue('');
          input && input.focus();
        }
      }
    },
    [value, answer]
  );

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
      if (onlyNumber.length !== 4) {
        setWarning('4자를 입력하세요');
      }
      if (!onlyNumber) {
        setWarning('숫자를 입력해주세요');
      }

      setValue(onlyNumber);
    },
    []
  );

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <>
      <div className="grid  justify-center">
        <div className="m-3  text-center text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          숫자야구 ⚾️
        </div>
        <div className=" grid  text-center font-extrabold">
          10번 안에 숫자를 맞춰 홈런을 쳐라!
        </div>
        <div className="mt-10 text-center text-2xl">
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputEl}
              maxLength={4}
              value={value}
              onChange={onChangeValue}
              className=" w-52 border-4 border-[#5061b3] text-center"
            />
            <button type="submit" disabled={!value}></button>
          </form>
        </div>
        <div className="h-4">
          <div className="  text-center text-red-500">{warning}</div>
        </div>

        <div className="my-8 text-center text-xl font-bold text-[#124753] text-shadow-sm">
          시도: {tries.length}
        </div>
      </div>
      <div className="mx-auto ">
        <ul className="flex flex-wrap  text-center font-semibold text-[#124753]">
          {tries.map((v, i) => (
            <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
          ))}
        </ul>
      </div>
      {modalOpen && <Modal baseballResult={result} baseball={'숫자야구'} />}
    </>
  );
};
export default NumberBaseball;
