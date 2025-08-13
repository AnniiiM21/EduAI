import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header>
        <h1>Welcome to EduPortal</h1>
        <p>Choose your role to access your personalized dashboard and resources</p>
      </header>
      <main className="roles-section">
        <section className="role-card student">
          <h2>Student Portal</h2>
          <p>Access your courses, grades, announcements, and academic resources in one place</p>
          <button className="enter-btn">Enter as Student</button>
          <img src="/assets/student.png" alt="Student Portal" />
        </section>
        <section className="role-card admin">
          <h2>Admin Dashboard</h2>
          <p>Manage users, courses, system settings, and monitor platform analytics</p>
          <button className="enter-btn">Enter as Admin</button>
          <img src="/assets/admin.png" alt="Admin Dashboard" />
        </section>
      </main>
      <footer>
        <img src="/assets/magicpath_watermark_dark.png" alt="MagicPath Watermark" className="watermark" />
        <p>Demo mode - Choose any role to explore the platform</p>
      </footer>
    </div>
  );
}
