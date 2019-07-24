import React, { useState } from 'react';
import Form from './components/Form/Form.js';
import TeamList from './components/Team/TeamList.js';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [user, setUser] = useState({name: '', email: '', role: ''});

  const handleSubmit = event => {
    event.preventDefault();
    team.push(user);
    setTeam(team);
    setUser({name: '', email: '', role: ''});
  };

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  };

  return (
    <div className="App">
      <TeamList team={team} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user} />
    </div>
  );
}

export default App;
