import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Landing />} />

    </Routes>
  </Router>
);

export default App;
