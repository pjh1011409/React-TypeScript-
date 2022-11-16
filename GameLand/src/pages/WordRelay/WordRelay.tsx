import * as React from 'react';
import { useState, useCallback, useRef } from 'react';
import Modal from '../../components/Modal';

const WorldRelay = () => {
  const [word, setWord] = useState('수박');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [winner, setWinner] = useState(1);
  const [warning, setWarning] = useState('');
  const [wordList, setWordList] = useState<string[]>(['']);
  const inputWord = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    e => {
      e.preventDefault();
      const input = inputWord.current;

      if (value.length === 1) {
        setResult('한글자 이상!');
      } else {
        if (word[word.length - 1] === value[0]) {
          setResult('딩동댕');
          setWord(value);
          setValue('');
          setWordList([...wordList, value]);
          if (wordList.length % 2 === 0) {
            setWinner(1);
          } else {
            setWinner(2);
          }
          if (input) {
            input.focus();
          }
        } else {
          setResult('땡');
          setValue('');
          if (input) {
            input.focus();
          }
        }
      }
    },
    [word, value]
  );

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const onlyKorean = e.target.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
      if (onlyKorean.length === 1) {
        setWarning('1글자 이상을 입력하세요');
      }
      if (!onlyKorean) {
        setWarning('한글을 입력해주세요');
      }
      setValue(onlyKorean);
    },
    []
  );

  return (
    <>
      <div className="grid  justify-center">
        <div className="m-3 text-center text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          끝말잇기 🗣
        </div>
        <div className=" text-center font-extrabold">
          단어를 말해라! 승자는?
        </div>
        <div className="my-6 text-center text-2xl font-black ">
          {winner === 1 ? (
            <div className="text-blue-700">Player 1&#39;s Turn!</div>
          ) : (
            <div className="text-red-700">Player 2&#39;s Turn!</div>
          )}
        </div>{' '}
        <div className="m-3 text-center text-3xl font-black text-[#124753] text-shadow-xl">
          {word}
        </div>
        <div className="m-3 text-center text-3xl font-black">
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputWord}
              type="text"
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
      </div>

      <div className="mx-auto">
        <ul className="flex flex-wrap  text-center font-semibold text-[#124753]">
          {wordList.map((text, i) => (
            <div key={`${i + 1}번째 : ${text}`}>
              <li className="mx-auto my-3 rounded-2xl px-3 py-2 text-lg">
                {i % 2 !== 0 ? (
                  <div className="text-blue-700"> {text}</div>
                ) : (
                  <div className="text-red-700"> {text}</div>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
      {result === '땡' && (
        <Modal wordRelay={'끝말잇기'} wordRelayWinner={winner} />
      )}
    </>
  );
};

export default WorldRelay;
