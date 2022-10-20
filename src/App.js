import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import SharingList from "./component/SharingList"
import CreateSharing from "./component/CreateSharing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharingList />} />
        <Route path="/create" element={< CreateSharing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
