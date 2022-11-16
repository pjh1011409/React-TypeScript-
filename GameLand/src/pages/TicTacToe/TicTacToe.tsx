import * as React from 'react';
import { useEffect, useReducer, useCallback, Reducer } from 'react';
import Table from './Table';
import Modal from '../../components/Modal';

interface ReducerState {
  winner: 'O' | 'X' | '무승부' | '';
  turn: 'O' | 'X';
  tableData: string[][];
  recentCell: [number, number];
}

const initialState: ReducerState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL' as const;
export const CHANGE_TURN = 'CHANGE_TURN' as const;
export const RESET_GAME = 'RESET_GAME' as const;

interface SetWinnerAction {
  type: typeof SET_WINNER;
  winner: 'O' | 'X' | '무승부';
}
const setWinner = (winner: 'O' | 'X' | '무승부'): SetWinnerAction => {
  return { type: SET_WINNER, winner };
};

interface ClickCellAction {
  type: typeof CLICK_CELL;
  row: number;
  cell: number;
}

export const clickCell = (row: number, cell: number): ClickCellAction => {
  return { type: CLICK_CELL, row, cell };
};

interface ChangeTurnAction {
  type: typeof CHANGE_TURN;
}

interface ResetGameAction {
  type: typeof RESET_GAME;
}

type ReducerActions =
  | SetWinnerAction
  | ClickCellAction
  | ChangeTurnAction
  | ResetGameAction;
const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(
    reducer,
    initialState
  );
  const { tableData, turn, winner, recentCell } = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch(setWinner('O'));
  }, []);

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }
    let win = false;
    if (
      tableData[row][0] === turn &&
      tableData[row][1] === turn &&
      tableData[row][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][cell] === turn &&
      tableData[1][cell] === turn &&
      tableData[2][cell] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][0] === turn &&
      tableData[1][1] === turn &&
      tableData[2][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][2] === turn &&
      tableData[1][1] === turn &&
      tableData[2][0] === turn
    ) {
      win = true;
    }
    console.log(win, row, cell, tableData, turn);
    if (win) {
      // 승리시
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true; // all이 true면 무승부라는 뜻
      tableData.forEach(row => {
        // 무승부 검사
        row.forEach(cell => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: RESET_GAME });
        dispatch(setWinner('무승부'));
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  return (
    <>
      {' '}
      <div className="grid  justify-center">
        <div className="m-3  flex justify-center text-center  text-3xl font-extrabold text-[#145d8a] text-shadow-xl">
          틱텍토
          <div className="ml-1 text-blue-700">O</div>
          <div className=" text-red-700">X</div>
        </div>
        <div className=" grid  text-center font-extrabold">
          한줄 먼저 채우면 빙고!
        </div>
        <div className="my-6 text-center text-2xl font-black ">
          {turn === 'O' ? (
            <div className="text-blue-700">Player 1&#39;s Turn! ({turn})</div>
          ) : (
            <div className="text-red-700">Player 2&#39;s Turn! ({turn})</div>
          )}
        </div>
        <div className="my-10">
          <Table
            onClick={onClickTable}
            tableData={tableData}
            dispatch={dispatch}
          />
        </div>

        {winner && <Modal tictactoe={'틱텍토'} tictactoeWinner={winner} />}
      </div>
    </>
  );
};

export default TicTacToe;
