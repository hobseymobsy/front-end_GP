import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetails from './pages/CourseDetails';
import QuizInterface from './pages/QuizInterface';
import AssignmentSubmission from './pages/AssignmentSubmission';
import ProfilePage from './pages/ProfilePage';
import DiscussionForum from './pages/DiscussionForum';
import Notifications from './pages/Notifications';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/quiz/:id" element={<QuizInterface />} />
          <Route path="/assignment/:id" element={<AssignmentSubmission />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forum" element={<DiscussionForum />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
