import * as React from 'react';
// import tw from 'tailwind-styled-components';
import { ModalBody } from './types';

const ModalBody = (props: ModalBody) => {
  return (
    <>
      <div className="my-3 grid justify-center">
        <>
          <div className="my-3 text-center text-2xl font-extrabold text-[#5061b3]">
            {props.gugudan === '구구단' && 'Score'}

            {props.wordRelay === '끝말잇기' && 'Winner'}

            {props.baseballResult?.charAt(0) === '답' && '홈런 실패 !'}
            {props.baseballResult?.charAt(0) === '총' && '홈런 !'}

            {props.rsp === '가위바위보' && '10판'}

            {props.response === '반응속도체크' && '당신의 반사신경은...'}

            {props.lotto === '로또뽑기' && <>당첨개수: {props.lottoResult}</>}

            {props.tictactoe === '틱텍토' && 'Winner'}
          </div>
          <div className="text-center text-2xl font-extrabold text-[#124753]">
            {props.gugudan === '구구단' && props.gugudanScore}
            {props.wordRelay === '끝말잇기' && (
              <>
                {props.wordRelayWinner === 2 && <div>player1</div>}
                {props.wordRelayWinner === 1 && <div>player2</div>}
              </>
            )}
            {props.baseball === '숫자야구' && props.baseballResult}
            {props.response === '반응속도체크' && <>{props.responseResult}ms</>}
            {props.rsp === '가위바위보' && (
              <>{`${props.rspWin}승 ${props.rspDraw}무 ${props.rspLose}패`}</>
            )}
            {props.lotto === '로또뽑기' && (
              <>
                {props.lottoResult === 6
                  ? '당첨금: 300,000,000 원'
                  : props.lottoResult === 5
                  ? '당첨금: 100,000,000 원'
                  : props.lottoResult === 4
                  ? '당첨금 50,000,000 원'
                  : props.lottoResult === 3
                  ? '당첨금 10,000,000 원'
                  : props.lottoResult === 2
                  ? '당첨금 5,000,000 만원'
                  : props.lottoResult === 1
                  ? '당첨금 1,000,000 만원'
                  : '꽝🤪'}
              </>
            )}
            {props.mine === '지뢰찾기' && props.mineResult}
            {props.tictactoe === '틱텍토' && (
              <>
                {props.tictactoeWinner === '무승부' ? (
                  '무승부'
                ) : (
                  <>{props.tictactoeWinner} 승리 </>
                )}
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default ModalBody;

// const GameResult = tw.div`

// `;
