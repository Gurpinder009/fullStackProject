import './App.css';
import { useState } from 'react';
import Router from './components/Router';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  );
}

export default App;
