import * as React from 'react';
import { ModalHeader } from './types';

const ModalHeader = (props: ModalHeader) => {
  return (
    <>
      <div className="grid justify-center rounded-t pt-3">
        <div className="text-center text-2xl font-semibold">
          <div className="font-bold text-[#145d8a]">
            {props.gugudan === '구구단' && <>{props.gugudan} 결과</>}
            {props.wordRelay === '끝말잇기' && <>{props.wordRelay} 결과</>}
            {props.baseball === '숫자야구' && <>{props.baseball} 결과</>}
            {props.response === '반응속도체크' && <>{props.response} 결과</>}
            {props.rsp === '반응속도체크' && <>{props.rsp} 결과</>}
            {props.lotto === '로또뽑기' && <>{props.lotto} 결과</>}
            {props.tictactoe === '틱텍토' && <>{props.tictactoe} 결과</>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
