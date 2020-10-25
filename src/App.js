import React from 'react';
import { Chat } from './components/Chat';
import { Sidebar } from './components/Sidebar';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
