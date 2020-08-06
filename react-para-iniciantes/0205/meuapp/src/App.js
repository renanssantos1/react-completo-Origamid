import React from "react";
import UseContext01 from "./components/0305/UseContext01";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <UseContext01 />
    </GlobalStorage>
  );
};
export default App;
