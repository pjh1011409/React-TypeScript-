import * as React from 'react';
import NumberBaseball from './NumberBaseball/NumberBaseball';
import RSP from './RSP/RSP';
import Lotto from './LottoGenerator/Lotto';
import GuGuDan from './GuGuDan/GuGuDan';
import WordRelay from './WordDelay/WordRelay';
import ResponseCheck from './ResponseCheck/ResponseCheck';
import MineSearch from './MineSearch/MineSearch';
import TicTacToe from './TicTacToe/TicTacToe';
import { useLocation, Routes, Route } from 'react-router';
import GameStart from './GameStart';

const GameMatcher = () => {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams.get('page'));
  return (
    <Routes>
      <Route path="gugudan" element={<GuGuDan />} />
      <Route path="word-relay" element={<WordRelay />} />
      <Route path="number-baseball" element={<NumberBaseball />} />
      <Route path="response-check" element={<ResponseCheck />} />
      <Route path="rock-scissors-paper" element={<RSP />} />
      <Route path="lotto-generator" element={<Lotto />} />
      <Route path="mine-search" element={<MineSearch />} />
      <Route path="tic-tac-toe" element={<TicTacToe />} />

      <Route path="*" element={<GameStart />} />
    </Routes>
  );
};

export default GameMatcher;
