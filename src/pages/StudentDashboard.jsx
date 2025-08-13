import React from 'react';
import './StudentDashboard.css';

export default function StudentDashboard() {
  return (
    <div className="student-dashboard-container">
      <header className="dashboard-header">
        <h1>EduPortal</h1>
      </header>
      <section className="student-info">
        <img src="/assets/student_avatar.png" alt="Student Avatar" className="avatar" />
        <div>
          <h2>Alex Johnson</h2>
          <span className="role">Student</span>
        </div>
      </section>
      <section className="welcome-section">
        <h3>Welcome back, Alex Johnson!</h3>
        <p>Here's what's happening with your studies today.</p>
      </section>
      <section className="summary-cards">
        <div className="card resources">
          <h4>New Resources</h4>
          <div className="card-value">5</div>
          <span>Available for study</span>
        </div>
        <div className="card tests">
          <h4>Upcoming Tests</h4>
          <div className="card-value">2</div>
          <span>This week</span>
        </div>
        <div className="card progress">
          <h4>Overall Progress</h4>
          <div className="card-value">78%</div>
          <span>Course completion</span>
        </div>
      </section>
      <section className="recent-resources">
        <h4>Recent Resources</h4>
        <ul>
          <li>
            <div className="resource-title">Advanced Calculus Fundamentals</div>
            <div className="resource-type">PDF • Analysis</div>
            <div className="resource-progress">85%</div>
          </li>
          <li>
            <div className="resource-title">Physics: Quantum Mechanics</div>
            <div className="resource-type">Video • Synthesis</div>
            <div className="resource-progress">60%</div>
          </li>
          <li>
            <div className="resource-title">Literature Analysis Methods</div>
            <div className="resource-type">Interactive • Evaluation</div>
            <div className="resource-progress">92%</div>
          </li>
        </ul>
      </section>
      <section className="upcoming-tests">
        <h4>Upcoming Tests</h4>
        <ul>
          <li>
            <div className="test-title">Calculus Midterm</div>
            <div className="test-date">2024-02-15</div>
            <button className="register-btn">Register</button>
          </li>
          <li>
            <div className="test-title">Physics Quiz 3</div>
            <div className="test-date">2024-02-12</div>
            <span className="scheduled">Scheduled</span>
          </li>
        </ul>
      </section>
      <footer>
        <img src="/assets/magicpath_watermark_dark.png" alt="MagicPath Watermark" className="watermark" />
      </footer>
    </div>
  );
}
