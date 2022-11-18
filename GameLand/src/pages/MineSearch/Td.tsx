import * as React from 'react';
import { useContext, memo, useCallback } from 'react';
import { TableContext, CODE, Codes } from './MineSearch';
import {
  openCell,
  clickMine,
  questionCell,
  flagMine,
  normalizeCell,
} from './Action';

const getTdStyle = (code: Codes) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#77767c',
      };
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: '#fffbf4',
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: '#eac843',
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: '#ea5e4e',
      };
    default:
      return {
        background: '#fffbf4',
      };
  }
};

const getTdText = (code: Codes) => {
  // console.log('getTdtext');
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'x';
    case CODE.CLICKED_MINE:
      return '💣';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return '?';
    default:
      return code || '';
  }
};

interface Props {
  rowIndex: number;
  cellIndex: number;
}

const Td = ({ rowIndex, cellIndex }: Props) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch(openCell(rowIndex, cellIndex));
        return;
      case CODE.MINE:
        dispatch(clickMine(rowIndex, cellIndex));
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch(flagMine(rowIndex, cellIndex));
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          dispatch(questionCell(rowIndex, cellIndex));
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          dispatch(normalizeCell(rowIndex, cellIndex));
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return (
    <RealTd
      onClickTd={onClickTd}
      onRightClickTd={onRightClickTd}
      data={tableData[rowIndex][cellIndex]}
    />
  );
};

interface RealTdProps {
  onClickTd: () => void;
  onRightClickTd: (e: React.MouseEvent) => void;
  data: Codes;
}
const RealTd = memo(({ onClickTd, onRightClickTd, data }: RealTdProps) => {
  return (
    <td
      style={getTdStyle(data)}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
      className="h-8 w-8 border-2 border-[#5061b3] text-center"
    >
      {getTdText(data)}
    </td>
  );
});

export default memo(Td);
