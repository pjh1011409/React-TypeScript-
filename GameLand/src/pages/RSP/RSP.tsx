import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import RSPImage from '../../assets/svg/RSPImage';
import styled from 'styled-components';
import Modal from '../../components/Modal';

const ComputerRSP = styled.div`
  #computer {
    width: 235px;
    height: 235px;
    border-radius: 50%;
  }
`;

const rspCoords = {
  바위: '0',
  가위: '-260px',
  보: '235px',
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return (Object.keys(rspCoords) as ['바위', '가위', '보']).find(k => {
    return rspCoords[k] === imgCoords;
  })!;
};

const RSP = () => {
  const [result, setResult] = useState('Click The Button');
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위);
  const [win, setWin] = useState(0);
  const [draw, setDraw] = useState(0);
  const [lose, setLose] = useState(0);
  const interval = useRef<number>();

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log('다시 실행');
    interval.current = window.setInterval(changeHand, 100);
    return () => {
      // componentWillUnmount 역할
      console.log('종료');
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다! ');
      setDraw(prevScore => prevScore + 1);
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다!  ');
      setWin(prevScore => prevScore + 1);
    } else {
      setResult('졌습니다! ');
      setLose(prevScore => prevScore + 1);
    }
    setTimeout(() => {
      interval.current = window.setInterval(changeHand, 100);
      setResult('Click the Button ');
    }, 300);
  };

  return (
    <>
      <div className="grid  justify-center">
        <div className="m-3 ml-8  flex  text-center text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          가위바위보
          <RSPImage />
        </div>
        <div className=" grid  text-center font-extrabold">
          안내면 진거 가위바위보~(총 10판)
        </div>
        <div className="mx-auto my-3 mt-2">
          <ComputerRSP>
            <div
              id="computer"
              style={{
                background: `url(https://data.ac-illust.com/data/thumbnails/02/028c32e022c0165725eaa79cbeb23e05_t.jpeg) ${imgCoord} 0`,
              }}
            />
          </ComputerRSP>
        </div>
        <div className="mx-auto flex">
          <button
            onClick={onClickBtn('가위')}
            className="mx-2 rounded-lg border-2 border-[#020a35] bg-[#5061b3] px-3 py-2"
          >
            ✌️
          </button>
          <button
            onClick={onClickBtn('바위')}
            className="mx-2 rounded-lg border-2 border-[#020a35] bg-[#5061b3] px-3 py-2"
          >
            ✊
          </button>
          <button
            onClick={onClickBtn('보')}
            className="mx-2 rounded-lg border-2 border-[#020a35] bg-[#5061b3] px-3 py-2"
          >
            🖐
          </button>
        </div>
        <div className="my-5 h-5 text-center text-base font-bold text-[#124753]">
          {result}
        </div>
        <div className="text-center text-2xl font-bold text-[#124753]">
          {win}승 {draw}무 {lose}패{' '}
        </div>
      </div>
      {win + draw + lose === 10 && (
        <Modal rsp={'가위바위보'} rspWin={win} rspDraw={draw} rspLose={lose} />
      )}
    </>
  );
};

export default RSP;
