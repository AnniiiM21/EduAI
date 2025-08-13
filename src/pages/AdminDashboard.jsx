import React from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <header className="dashboard-header">
        <h1>EduAI Platform</h1>
      </header>
      <section className="profile-info">
        <img src="/assets/professor_avatar.png" alt="Professor Avatar" className="avatar" />
        <div>
          <h2>Prof. Johnson</h2>
        </div>
      </section>
      <section className="stats-cards">
        <div className="card documents">
          <h4>Total Documents</h4>
          <div className="card-value">1,247</div>
          <span className="card-change">+12% from last month</span>
        </div>
        <div className="card students">
          <h4>Active Students</h4>
          <div className="card-value">342</div>
          <span className="card-change">+8% from last month</span>
        </div>
        <div className="card classifications">
          <h4>Classifications</h4>
          <div className="card-value">1,156</div>
          <span className="card-change">+15% from last month</span>
        </div>
        <div className="card completion">
          <h4>Completion Rate</h4>
          <div className="card-value">88%</div>
          <span className="card-change">+3% from last month</span>
        </div>
      </section>
      <section className="progress-section">
        <h4>Student Progress</h4>
        {/* Add charts or progress bars here */}
      </section>
      <section className="taxonomy-section">
        <h4>Bloom's Taxonomy Distribution</h4>
        {/* Add distribution chart or visualization here */}
      </section>
      <footer>
        <img src="/assets/magicpath_watermark_dark.png" alt="MagicPath Watermark" className="watermark" />
      </footer>
    </div>
  );
}
