import React from 'react';
import { Link } from 'react-router-dom';
import './MainLanding.css';

const MainLanding = () => {
  return (
    <div className="main-landing-container">
      <h1>Bloom's Taxonomy Resource Platform</h1>
      <p>Select your role to continue:</p>
      <div className="role-actions">
        <Link to="/student" className="btn">Student</Link>
        <Link to="/professor" className="btn">Professor/Admin</Link>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Link to="/" className="btn">Main Landing</Link>
        <Link to="/student" className="btn">Student Landing</Link>
        <Link to="/professor" className="btn">Professor Landing</Link>
      </div>
    </div>
  );
};

export default MainLanding;
