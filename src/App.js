import React from "react";
import DataTable from "./components/Table/index";
import "./App.css";
import tableProperties from "./data";

function App() {
  return (
    <DataTable
      {...tableProperties}
      resizeToFit={false} // shows all columns (squeezed) if passed as true
      extraClass="table-container"
    />
  );
}

export default App;
