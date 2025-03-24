import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './components/LandingPage';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [desks, setDesks] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users'); // Prefix with /api
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const fetchDesks = async () => {
        const response = await fetch(`/api/desk/user/${selectedUser}`); // Prefix with /api
        const data = await response.json();
        setDesks(data);
      };
      fetchDesks();
    }
  }, [selectedUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={
          <>
            <div className="p-4">
              <label htmlFor="user-select" className="block text-sm font-medium text-gray-700">Select User:</label>
              <select id="user-select" onChange={(e) => setSelectedUser(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="">--Please choose an option--</option>
                {users.map(user => (
                  <option key={user._id} value={user._id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium text-red-900">Desks created by selected user:</h2>
              <ul className="mt-2 space-y-2">
                {desks.map(desk => (
                  <li key={desk._id} className="p-4 bg-white shadow rounded-lg">{desk.title} - Messiness Level: {desk.messinessLevel}</li>
                ))}
              </ul>
            </div>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;

