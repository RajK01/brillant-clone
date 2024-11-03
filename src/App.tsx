import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './context/UserContext'; // Import UserProvider

// ReactDOM.render(
//   <UserProvider>
//     <App />
//   </UserProvider>,
//   document.getElementById('root')
// );

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;