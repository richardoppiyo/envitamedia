import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create/Create';
import Landing from './components/Landing/Landing';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="create" element={<Create />} />
    </Routes>
  </Router>
);

export default App;
