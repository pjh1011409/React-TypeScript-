import * as React from 'react';
import { TableContext } from './MineSearch';
import { useContext } from 'react';
import Tr from './Tr';

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table className="mx-auto border-collapse">
      <tbody>
        {Array(tableData.length)
          .fill(null)
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
