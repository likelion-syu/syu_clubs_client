import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

async function getClubs() {
  const response = await axios.get<Clubs>(
    'http://127.0.0.1:8000/api/union/club/'
  );
  return response.data;
}

interface Clubs {
  club_id: number;
  club_name: string;
  club_desc: string;
  user: object;
  club_img_url: string;
  created_at: Date;
  updated_at: Date;
  is_central: string;
  is_united: string;
  club_type: object;
}

function App() {
  console.log(getClubs());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
