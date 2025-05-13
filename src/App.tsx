import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import PainPointsAnalyzer from './pages/PainPointsAnalyzer';
import TechSolutions from './pages/TechSolutions';
import LogisticsStrategies from './pages/LogisticsStrategies';
import CollaborationHub from './pages/CollaborationHub';
import DesignThinking from './pages/DesignThinking';
import KpiTracker from './pages/KpiTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pain-points" element={<PainPointsAnalyzer />} />
          <Route path="tech-solutions" element={<TechSolutions />} />
          <Route path="logistics" element={<LogisticsStrategies />} />
          <Route path="collaboration" element={<CollaborationHub />} />
          <Route path="design-thinking" element={<DesignThinking />} />
          <Route path="kpi-tracker" element={<KpiTracker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;