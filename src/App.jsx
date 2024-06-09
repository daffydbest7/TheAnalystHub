import React from 'react';
import { Routes, Route } from "react-router-dom";
import Maintenance from './components/Maintenance';



const App = () => {
  return (

    <div className="">
     <Routes>
     <Route path="/" element={<Maintenance />} />
     </Routes>
    </div>
    
  );
};

export default App;



