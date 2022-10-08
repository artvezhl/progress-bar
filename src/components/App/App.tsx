import React from 'react';

import s from './App.module.scss';
import ProgressBar from "../ProgressBar/ProgressBar";
import data from "../../data"

function App() {
  return (
    <div className={s.App}>
      <h1>Trood test App</h1>
      <h2>ProgressBar Component</h2>
      <ProgressBar data={data} width={500} height={22} />
    </div>
  );
}

export default App;
