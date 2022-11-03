import * as React from "react";
import { TableContext } from "./MineSearch";
import { useContext } from "react";
import Tr from "./MineTr";

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
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
