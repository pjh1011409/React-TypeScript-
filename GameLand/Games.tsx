import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GameMatcher from './GameMatcher';
import * as B from './background';

const Games: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <B.Background>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="bg-[#292828]">
          <div className="grid h-24 content-end justify-center gap-2 ">
            <div className=" m-3  grid h-14  content-center rounded p-5 text-3xl font-black text-white transition delay-100 duration-300 ease-in-out hover:-translate-y-1">
              PJH&#39;s Game World &nbsp; 🎮
            </div>
          </div>
          <div className="mx-auto grid w-full grid-cols-2 justify-center  gap-3  sm:grid-cols-2 md:w-1/2 md:grid-cols-4 ">
            <div className="col-span-1 grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/gugudan">
                <button className="mx-3  min-w-max px-3 py-2">구구단 </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white ">
              <Link to="/game/word-relay">
                {' '}
                <button className="mx-3  min-w-max px-3 py-2">끝말잇기 </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/number-baseball">
                {' '}
                <button className="mx-3  min-w-max px-3 py-2">숫자야구</button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/response-check">
                <button className="mx-3  min-w-max px-3 py-2">
                  반응속도체크
                </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/rock-scissors-paper">
                <button className="mx-3  min-w-max px-3 py-2">
                  가위바위보{' '}
                </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/lotto-generator">
                <button className="mx-3  min-w-max px-3 py-2">
                  로또생성기
                </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/mine-search">
                {' '}
                <button className="mx-3  min-w-max px-3 py-2">지뢰찾기 </button>
              </Link>
            </div>
            <div className="grid items-center justify-center rounded-xl bg-[#99a1e7] font-bold text-blue-900 duration-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white">
              <Link to="/game/tic-tac-toe">
                <button className="mx-3  min-w-max px-3 py-2">틱텍토 </button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-3 h-[509px] rounded-xl border-4 border-[#003470] bg-[#f8efed] p-8  font-sans md:w-2/3">
            <Routes>
              <Route path="*" element={<GameMatcher />} />
              <Route path="/game/*" element={<GameMatcher />} />
            </Routes>
          </div>

          <div className="mt-3 grid h-8 content-center justify-center ">
            <div className="text-white">2022. Made by Park Jeong Ho</div>
          </div>
        </div>
      </B.Background>
    </BrowserRouter>
  );
};

export default Games;
