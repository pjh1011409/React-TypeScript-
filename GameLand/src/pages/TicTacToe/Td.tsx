import * as React from 'react';
import { useCallback, memo, Dispatch } from 'react';
import { clickCell } from './TicTacToe';

interface Props {
  rowIndex: number;
  cellIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
  cellData: string;
  children: string;
}

const Td = ({ rowIndex, cellIndex, dispatch, cellData }: Props) => {
  console.log('td rendered');

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch(clickCell(rowIndex, cellIndex));
  }, [cellData]);

  return (
    <td
      onClick={onClickTd}
      className="h-20 w-20 border-2 border-[#5061b3] text-center"
    >
      {cellData === 'O' && (
        <div className="text-3xl font-extrabold text-blue-700">{cellData}</div>
      )}
      {cellData === 'X' && (
        <div className="text-3xl font-extrabold text-red-700">{cellData}</div>
      )}
    </td>
  );
};

export default memo(Td);
