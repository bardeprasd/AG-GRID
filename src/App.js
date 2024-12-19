// import logo from './logo.svg';
// import './App.css';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css"
// import { AgGridReact } from 'ag-grid-react';
// import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
// import { useState } from 'react';

// // Register all Community features
// ModuleRegistry.registerModules([AllCommunityModule]);


// function App() {

//   const [rowData, setRowData] = useState([
//     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//     { make: "Ford", model: "F-Series", price: 33850, electric: false },
//     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
// ]);


// const [colDefs, setColDefs] = useState([
//   { field: "make" },
//   { field: "model" },
//   { field: "price" },
//   { field: "electric" }
// ]);
//   return (
//     <div className='ag-theme-quartz' style={{height:500}}>
//       <AgGridReact rowData={rowData} columnDefs={colDefs}/>
     
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import StyledAgGrid from './components/StyledGrid';

// function App() {
//   return (
//     <div >
//       <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
//         <h1 style={{ margin: '0', fontSize: '2rem', color: '#333' }}>AG Grid with Fake API</h1>
//         <p style={{ color: '#666' }}>An example of AG Grid fetching and displaying data from a fake API</p>
//       </header>
//       <main >
//         <StyledAgGrid />
//       </main>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import LineChart from './components/LineChart'; // Adjust the path as needed

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <LineChart />
    </div>
  );
};

export default App;


