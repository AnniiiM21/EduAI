import React from 'react';
import { Link } from 'react-router-dom';
import './StudentLanding.css';

const StudentLanding = () => {
  return (
    <div className="student-landing-container">
      <h1>Welcome to Bloom's Taxonomy Resource Platform</h1>
      <p>Access resources, take tests, and track your progress.</p>
      <div className="student-actions">
        <Link to="/dashboard" className="btn">Go to Dashboard</Link>
        <Link to="/test" className="btn">Take a Test</Link>
        <Link to="/upload" className="btn">Upload PDF (if permitted)</Link>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Link to="/" className="btn">Main Landing</Link>
        <Link to="/student" className="btn">Student Landing</Link>
        <Link to="/professor" className="btn">Professor Landing</Link>
      </div>
    </div>
  );
};

export default StudentLanding;
