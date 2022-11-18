import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModalFooter } from './types';

const ModalFooter = (props: ModalFooter) => {
  return (
    <>
      <div className="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6">
        <button
          className="mx-5 mr-1 mb-1 rounded bg-[#ffc762] px-6 py-3 text-sm font-bold uppercase text-[#00917a] shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#ffc762]"
          type="button"
          onClick={() => {
            props.setShowModal(false);

            {
              props.gugudan === '구구단' && window.location.replace('/gugudan');
            }
            {
              props.wordRelay === '끝말잇기' &&
                window.location.replace('/word-relay');
            }
            {
              props.baseball === '숫자야구' &&
                window.location.replace('/number-baseball');
            }
            {
              props.response === '반응속도체크' &&
                window.location.replace('/response-check');
            }
            {
              props.rsp === '가위바위보' &&
                window.location.replace('/rock-scissors-paper');
            }
            {
              props.lotto === '로또뽑기' &&
                window.location.replace('/lotto-generator');
            }
            {
              props.mine === '지뢰찾기' &&
                window.location.replace('/mine-search');
            }
            {
              props.tictactoe === '틱텍토' &&
                window.location.replace('/tic-tac-toe');
            }
          }}
        >
          Retry
        </button>
        <button
          className="mx-5 mr-1 mb-1 rounded bg-[#00917a] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#00917a]"
          type="button"
          onClick={() => props.setShowModal(false)}
        >
          <Link to="/"> HOME</Link>
        </button>
      </div>
    </>
  );
};

export default ModalFooter;
