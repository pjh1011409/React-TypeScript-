import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  GuGuDan,
  LottoGenerator,
  MineSearch,
  NumberBaseball,
  ResponseCheck,
  RSP,
  TicTacToe,
  WordRelay,
} from './pages';
import { Layout, GameStart } from './layout';

const GameMatcher = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/gugudan" element={<GuGuDan />} />
        <Route path="/word-relay" element={<WordRelay />} />
        <Route path="/number-baseball" element={<NumberBaseball />} />
        <Route path="/response-check" element={<ResponseCheck />} />
        <Route path="/rock-scissors-paper" element={<RSP />} />
        <Route path="/lotto-generator" element={<LottoGenerator />} />
        <Route path="/mine-search" element={<MineSearch />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />

        <Route path="/" element={<GameStart />} />
      </Route>
    </Routes>
  );
};

export default GameMatcher;
