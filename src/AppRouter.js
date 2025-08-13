import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserAuth, PDFUpload, ResourceDashboard, TestInterface, AdminPanel } from './components';
import StudentLanding from './components/StudentLanding';
import MainLanding from './components/MainLanding';
import ProfessorLanding from './components/ProfessorLanding';

const AppRouter = () => (
  <Router>
    <Routes>
  <Route path="/" element={<MainLanding />} />
  <Route path="/student" element={<StudentLanding />} />
  <Route path="/professor" element={<ProfessorLanding />} />
      <Route path="/upload" element={<PDFUpload />} />
      <Route path="/dashboard" element={<ResourceDashboard />} />
      <Route path="/test" element={<TestInterface />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default AppRouter;
