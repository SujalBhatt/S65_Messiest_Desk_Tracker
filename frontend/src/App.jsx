import { useState, useEffect } from 'react';
import './App.css'

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
    <>
      <div>
        <label htmlFor="user-select">Select User:</label>
        <select id="user-select" onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">--Please choose an option--</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div>
        <h2>Desks created by selected user:</h2>
        <ul>
          {desks.map(desk => (
            <li key={desk._id}>{desk.title} - Messiness Level: {desk.messinessLevel}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

