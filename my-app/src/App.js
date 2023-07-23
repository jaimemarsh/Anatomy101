import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../src/pages/Start';
import Choices from '../src/pages/ChoiceCard';
import BonesPage from '../src/pages/BonesStart';
import MusclePage from '../src/pages/MusclesStart';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route
          path="/Start"
          element={<Start />}
        />
         <Route
          path="/ChoiceCard"
          element={<Choices />}
        />
        <Route
          path="/BonesStart"
          element={<BonesPage />}
        />
         <Route
          path="/MusclesStart"
          element={<MusclePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
