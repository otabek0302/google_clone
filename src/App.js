import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Content from "./components/Content"
import Direction from "./components/Direction"

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="pt-6 bg-white dark:bg-slate-900 dark:text-gray-200 min-h-screen">
          <Routes>
              <Route exact path="/" element={ <Content dark={dark} setDark={setDark} /> } />
              <Route exact path="/search" element={ <Direction dark={dark} setDark={setDark} /> } />
          </Routes>
      </div>
    </div>
  );
};

export default App;
