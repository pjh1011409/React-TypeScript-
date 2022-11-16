import { Dispatch, memo, useMemo } from 'react';
import * as React from 'react';
import Td from './Td';

interface Props {
  rowData: string[];
  rowIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
}

const Tr = ({ rowData, rowIndex, dispatch }: Props) => {
  console.log('tr rendered');

  return (
    <tr>
      {Array(rowData.length)
        .fill(null)
        .map((td, i) =>
          useMemo(
            () => (
              <Td
                key={i}
                dispatch={dispatch}
                rowIndex={rowIndex}
                cellIndex={i}
                cellData={rowData[i]}
              >
                {''}
              </Td>
            ),
            [rowData[i]]
          )
        )}
    </tr>
  );
};

export default memo(Tr);
