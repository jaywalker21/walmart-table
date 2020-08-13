import React, { useRef, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

import "./styles.css";

const DataTable = ({
  resizeToFit = false,
  extraClass = "table-default-container",
  ...props
}) => {
  const gridRef = useRef(false);

  useEffect(() => {
    if (gridRef && gridRef.current && resizeToFit) {
      gridRef.current.api.sizeColumnsToFit();
    }
  }, [gridRef, resizeToFit]);

  return (
    <div className={`ag-theme-alpine ${extraClass}`}>
      <AgGridReact {...props} ref={gridRef} />
    </div>
  );
};

export default DataTable;
