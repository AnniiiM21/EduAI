import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessorLanding.css';

const ProfessorLanding = () => {
  return (
    <div className="professor-landing-container">
      <h1>Welcome Professor/Admin</h1>
      <p>Manage resources, upload PDFs, and monitor student progress.</p>
      <div className="professor-actions">
        <Link to="/upload" className="btn">Upload PDF</Link>
        <Link to="/admin" className="btn">Go to Admin Panel</Link>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Link to="/" className="btn">Main Landing</Link>
        <Link to="/student" className="btn">Student Landing</Link>
        <Link to="/professor" className="btn">Professor Landing</Link>
      </div>
    </div>
  );
};

export default ProfessorLanding;
