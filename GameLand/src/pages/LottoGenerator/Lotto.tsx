import * as React from 'react';
import { useState, useRef, useMemo, useCallback } from 'react';
import Ball from './Ball';
import Modal from '../../components/Modal';

function getWinNumbers() {
  const candidate = Array(45)
    .fill(null)
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState<number[]>([]);
  const timeouts = useRef<number[]>([]);

  const [value, setValue] = useState('');
  const [warning, setWarning] = useState('숫자  6개를 입력하세요');
  const [myLottoList, setMyLottoList] = useState<number[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonTesxt] = useState(false);
  const [result, setResult] = useState(0);
  // const [modalOpen, setModalOpen] = useState(false);

  const startLotto = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = window.setTimeout(() => {
        setWinBalls(prevBalls => [...prevBalls, winNumbers[i]]);
        myLottoList.includes(winNumbers[i]) &&
          setResult(prevResult => (prevResult += 1));
      }, (i + 1) * 1000);
    }

    return () => {
      timeouts.current.forEach(v => {
        clearTimeout(v);
      });
    };
  };

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    e => {
      e.preventDefault();

      if (myLottoList.length < 6) {
        if (!myLottoList.includes(parseInt(value))) {
          setMyLottoList(myLottoList.concat(parseInt(value)));
        } else {
          setWarning('숫자가 중복됩니다');
        }
      } else {
        setWarning('로또번호는 6개까지입니다');
      }

      setValue('');
    },
    [value]
  );

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
      if (onlyNumber === '0' || onlyNumber > '45') {
        setWarning('1부터 45 범위 안에서 입력하세요');
      }
      if (!onlyNumber) {
        setWarning('숫자를 입력해주세요');
      }
      setValue(onlyNumber);
    },
    []
  );

  return (
    <>
      <div className="grid  justify-center">
        <div className="m-3 ml-8  flex  text-center text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          로또뽑기 🤹
        </div>
        <div className=" grid  text-center font-extrabold">
          신이시여 제발 행운을 🙏
        </div>

        <div className="mt-10 text-center text-2xl">
          <form onSubmit={onSubmitForm}>
            <input
              type="number"
              maxLength={2}
              min="1"
              max="45"
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
      <div
        className="mx-auto my-3 mt-8 flex w-1/2 flex-wrap gap-5
      "
      >
        {myLottoList
          .sort((a, b) => a - b)
          .map((lotto, i) => {
            return (
              <div className="mx-auto">
                <Ball key={`${i + 1}차 시도 : ${lotto}`} number={lotto} />
              </div>
            );
          })}
      </div>
      <div className="grid  justify-center">
        {myLottoList.length === 6 && (
          <button
            onClick={() => {
              startLotto();
              setButtonDisabled(false);
              setButtonTesxt(true);
            }}
            disabled={!buttonDisabled}
            className="my-8 rounded-2xl  bg-[#7ed2a0] px-4 py-2 text-lg font-bold text-[#12336e]"
          >
            {buttonText ? '당첨숫자' : '당첨 확인'}
          </button>
        )}
      </div>
      <div className="mx-auto flex w-1/2 flex-wrap gap-5">
        {winBalls.map(v => (
          <div className="mx-auto">
            <Ball key={v} number={v} />
          </div>
        ))}
      </div>
      {winBalls.length === 6 && (
        <Modal lotto={'로또뽑기'} lottoResult={result} />
      )}
    </>
  );
};

export default Lotto;
