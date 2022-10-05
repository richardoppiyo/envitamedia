import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create/Create';
import Event from './components/Event/Event';
import Landing from './components/Landing/Landing';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="create" element={<Create />} />
      <Route path="event" element={<Event />} />
    </Routes>
  </Router>
);

export default App;
