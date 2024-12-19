// import React, { useEffect, useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
// import 'ag-grid-community/styles/ag-theme-alpine.css'; // Alpine theme CSS
import axios from 'axios';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { useState ,useEffect} from 'react';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const StyledAgGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Body', field: 'body', sortable: true, filter: true, flex: 1 },
  ]);

  useEffect(() => {
    // Fetch data from the fake API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setRowData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: '500px',
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          resizable: true,
          filter: true,
          sortable: true,
          flex: 1,
        }}
        animateRows={true}
        rowSelection="multiple"
      />
    </div>
  );
};

export default StyledAgGrid;
