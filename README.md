# EduAI Platform

EduAI is an AI-powered resource allocation platform designed for educational institutions. It leverages Bloom’s Taxonomy and custom-trained NLP models to classify resources and optimize student learning pathways.

## Features
- **Role-based Access:** Professors/Admins and Students have tailored dashboards and workflows.
- **PDF Upload & Classification:** Admins upload research papers/resources, which are classified by AI according to Bloom’s Taxonomy levels.
- **Student Registration & Evaluation:** Students register, take tests, and receive resources mapped to their proficiency.
- **AI-driven Resource Distribution:** The platform dynamically allocates resources based on student performance and Bloom’s levels.
- **Iterative Evaluation:** Resource access updates as students progress through evaluations.
- **Admin Dashboard:** Monitor resource usage, student progress, and document mappings.

## Tech Stack
- **Frontend:** ReactJS (Vite)
- **Backend:** Node.js (API, Authentication, Database)
- **AI Model:** Python (NLP, Hugging Face/TensorFlow)
- **Database:** PostgreSQL/MongoDB
- **File Storage:** AWS S3 or similar

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AnniiiM21/EduAI.git
   cd EduAI
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
- `src/pages/` — Main pages: Landing, Student Dashboard, Admin Dashboard
- `public/assets/` — Static images and assets
- `App.jsx` — Routing and navigation
- `vite.config.js` — Vite configuration

## How It Works
- **Landing Page:** Choose your role (Student/Admin) to access personalized dashboards.
- **Student Dashboard:** View resources, progress, and upcoming tests. Resources are allocated based on Bloom’s Taxonomy and your test results.
- **Admin Dashboard:** Upload and classify resources, monitor student progress, and view analytics.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

---
EduAI: Smarter resource allocation for better learning outcomes.
