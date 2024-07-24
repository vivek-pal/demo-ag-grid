import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const Grid = () => {
  const [rowData, setRowData] = useState([]);
  const columnDefs = [
    {
        headerName: "Athlete",
        field: "athlete",
        width: 300,
        filter: true,
        resizable: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100,
        filter: true,
        resizable: true
      },
      {
        headerName: "Country",
        field: "country",
        width: 200,
        resizable: true
      },
      {
        headerName: "Year",
        field: "year",
        width: 110,
        resizable: true
      },
      {
        headerName: "Date",
        field: "date",
        width: 150,
        filter: true,
        resizable: true
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 200,
        resizable: true
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 110,
        resizable: true
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 110,
        resizable: true
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 110,
        resizable: true
      },
      {
        headerName: "Total",
        field: "total",
        width: 110,
        filter: true,
        resizable: true
      },
  ];

  useEffect(() => {
    async function fetchMyAPI() {
      const dataUrl =
        "https://www.ag-grid.com/example-assets/olympic-winners.json";
      let response = await fetch(dataUrl);
      response = await response.json();
      setRowData(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div style={{ height: "87vh" }}>
        <h1>AG Grid Demo</h1>
      <div
        style={{ height: "100%" }}
        className="ag-theme-balham"
      >
        <AgGridReact
          // rowSelection="multiple"
          // suppressRowClickSelection
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={20}
          rowData={rowData}
        />
      </div>
    </div>
  );
};

export default Grid;
