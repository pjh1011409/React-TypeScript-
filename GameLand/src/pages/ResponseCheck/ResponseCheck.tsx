import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';

const GreenRed = styled.div`
  #screen {
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
  }
  #screen.waiting {
    background-color: orange;
    margin: 0 auto;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: green;
  }
`;

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('Click to start 🟠');
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => {
        setState('now');
        setMessage('Now 🟢');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('Click on green 🔴');
    } else if (state === 'ready') {
      // 성급하게 클릭
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setState('waiting');
      setMessage('초록색에 누르시라고요😐 Click👆');
    } else if (state === 'now') {
      setOpenModal(true);
      // 반응속도 체크
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭하여 시작하세요.👆');
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  return (
    <>
      {' '}
      <div className="grid  justify-center">
        <div className="m-3  text-center text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          반응속도체크 ✅
        </div>
        <div className=" grid  text-center font-extrabold">
          당신은 반사신경은?
        </div>
        <div className="my-6 content-center">
          <GreenRed>
            <div id="screen" className={state} onClick={onClickScreen} />
          </GreenRed>
          <div className="mt-6 animate-bounce text-center text-xl text-[#124753] text-shadow-xl">
            {message}
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          responseResult={result.reduce((a, c) => a + c) / result.length}
          response={'반응속도체크'}
        />
      )}
    </>
  );
};

export default ResponseCheck;
