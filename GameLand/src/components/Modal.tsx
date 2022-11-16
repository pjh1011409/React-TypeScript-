import * as React from 'react';
import { useState } from 'react';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import { ModalMain } from './types';

const Modal = (props: ModalMain) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-2/3 max-w-xl ">
              {/*content*/}

              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <ModalHeader
                  gugudan={props.gugudan}
                  wordRelay={props.wordRelay}
                  baseball={props.baseball}
                  response={props.response}
                  rsp={props.rsp}
                  lotto={props.lotto}
                  tictactoe={props.tictactoe}
                />
                {/*body*/}
                <ModalBody
                  gugudan={props.gugudan}
                  gugudanScore={props.gugudanScore}
                  wordRelay={props.wordRelay}
                  wordRelayWinner={props.wordRelayWinner}
                  baseball={props.baseball}
                  baseballResult={props.baseballResult}
                  response={props.response}
                  responseResult={props.responseResult}
                  rsp={props.rsp}
                  rspWin={props.rspWin}
                  rspDraw={props.rspDraw}
                  rspLose={props.rspLose}
                  lotto={props.lotto}
                  lottoResult={props.lottoResult}
                  tictactoe={props.tictactoe}
                  tictactoeWinner={props.tictactoeWinner}
                />
                {/*footer*/}
                <ModalFooter
                  gugudan={props.gugudan}
                  wordRelay={props.wordRelay}
                  baseball={props.baseball}
                  response={props.response}
                  rsp={props.rsp}
                  lotto={props.lotto}
                  tictactoe={props.tictactoe}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
