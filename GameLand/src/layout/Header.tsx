import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
  const gameSet = [
    ['gugudan', '구구단'],
    ['word-relay', '끝말잇기'],
    ['number-baseball', '숫자야구'],
    ['response-check', '반응속도체크'],
    ['rock-scissors-paper', '가위바위보'],
    ['lotto-generator', '로또뽑기'],
    ['mine-search', '지뢰찾기'],
    ['tic-tac-toe', '틱텍토'],
  ];
  return (
    <div>
      <div className="grid h-24 content-end justify-center gap-2 ">
        <div className=" m-3  grid h-14  content-center rounded p-5 text-3xl font-black text-white transition delay-100 duration-300 ease-in-out text-shadow-h2 hover:-translate-y-1 ">
          <Link to="/">Fun Game Studio &nbsp; 🎮</Link>
        </div>
      </div>

      <div className="mx-auto grid w-[95%] grid-cols-2 justify-center  gap-3  sm:grid-cols-2 md:w-1/2 md:grid-cols-4 ">
        {gameSet.map((url, i) => {
          return (
            <div
              key={`${i + 1}번째 게임: ${url}`}
              className="col-span-1 grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white"
            >
              <Link to={`/${url[0]}`}>
                <button className="mx-3  min-w-max px-3 py-2">{url[1]} </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
