import React, { useState } from 'react';
import Form from './components/Form/Form.js';
import './App.css';

function App() {
  const [user, setUser] = useState({name: '', email: '', role: ''});

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  };

  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user} />
    </div>
  );
}

export default App;
