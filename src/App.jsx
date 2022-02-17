import React, { useState, useEffect } from 'react';
import Greeter from "./components/Greeter.jsx";

const App = () => {

  const [username, setUsername] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('effect running!')
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
}, [loaded]);

  const handleToggle = () => {
    setLoaded(!loaded);
  }

  if (!loaded) {
    return (
      <div>
      'Website loading...'
    <button onClick={handleToggle}>Toggle</button>
    </div>
    );
  } else {

  return (
    <div>
      <Greeter name="PJ" phrase="Hotdog" />
    <Greeter name="Alyssa" phrase="Wowee" />
    <Greeter name="Jimjam" phrase="Shut up" />
    <input value={username} onChange={e => setUsername(e.target.value)}/>
    <p>You are logging in as: {username}</p>
    <button onClick={handleToggle}>Toggle</button>
    </div>
  );
  };
};

export default App;