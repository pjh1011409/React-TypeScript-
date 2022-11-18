import * as React from 'react';
import { useState, useCallback, useContext } from 'react';
import { TableContext } from './MineSearch';
import { startGame } from './Action';

const Form = ({
  setOption,
}: {
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRow(Number(e.target.value));
  }, []);

  const onChangeCell = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCell(Number(e.target.value));
  }, []);

  const onChangeMine = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMine(Number(e.target.value));
  }, []);

  const onClickBtn = useCallback(() => {
    setOption(false);
    dispatch(startGame(row, cell, mine));
  }, [row, cell, mine]);

  return (
    <>
      <div className="mt-2 flex flex-wrap justify-center">
        <div>
          <div className="mr-2 text-center font-bold text-[#124753]">가로</div>
          <input
            type="number"
            placeholder="가로"
            value={cell}
            onChange={onChangeCell}
            className=" mx-3 w-28 border-4 border-[#5061b3] text-center"
          />
        </div>
        <div>
          <div className="mr-2 text-center font-bold text-[#124753]">세로</div>
          <input
            type="number"
            placeholder="세로"
            value={row}
            onChange={onChangeRow}
            className=" mx-3 w-28 border-4 border-[#5061b3] text-center"
          />
        </div>

        <div>
          <div className="mr-2 text-center font-bold text-[#124753]">지뢰</div>
          <input
            type="number"
            placeholder="지뢰"
            value={mine}
            onChange={onChangeMine}
            className=" mx-3 w-28 border-4 border-[#5061b3] text-center"
          />
        </div>
      </div>
      <div className="mr-2 grid justify-center font-bold text-[#124753]">
        <button
          onClick={onClickBtn}
          className="my-3 rounded-2xl  bg-[#7ed2a0] px-4 py-2 text-center text-lg font-bold text-[#5061b3]"
        >
          시작
        </button>
      </div>
    </>
  );
};

export default Form;
