export interface ModalMain {
  gugudan?: string;
  gugudanScore?: number;

  wordRelay?: string;
  wordRelayWinner?: number;

  baseball?: string;
  baseballResult?: string;

  responseResult?: number;
  response?: string;

  rsp?: string;
  rspWin?: number;
  rspDraw?: number;
  rspLose?: number;

  lotto?: string;
  lottoResult?: number;

  mine?: string;
  mineResult?: string;

  tictactoe?: string;
  tictactoeWinner?: string;
}

export interface ModalHeader {
  gugudan?: string;
  wordRelay?: string;
  baseball?: string;
  response?: string;
  rsp?: string;
  lotto?: string;
  mine?: string;
  tictactoe?: string;
}

export interface ModalBody {
  gugudan?: string;
  gugudanScore?: number;

  wordRelay?: string;
  wordRelayWinner?: number;

  baseball?: string;
  baseballResult?: string;

  responseResult?: number;
  response?: string;

  rsp?: string;
  rspWin?: number;
  rspDraw?: number;
  rspLose?: number;

  lotto?: string;
  lottoResult?: number;

  mine?: string;
  mineResult?: string;

  tictactoe?: string;
  tictactoeWinner?: string;
}

export interface ModalFooter {
  gugudan?: string;
  wordRelay?: string;
  baseball?: string;
  response?: string;
  rsp?: string;
  lotto?: string;
  mine?: string;
  tictactoe?: string;

  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
