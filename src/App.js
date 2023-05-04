import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState([]);

  const getMessages = async () => {
    const options = {
      method:'POST',
      body: JSON.stringify({
        message: value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('https://8000-brendonrofe-reactchatgp-b3b91exod4b.ws-eu96b.gitpod.io/completions', options);
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if(!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if(currentTitle && value && message) {
      setPreviousChats(prevChats => (
        [...prevChats, 
          {
            title: currentTitle,
            role: 'user',
            content: value
          },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }
        ]
      ));
    }
  }, [message, currentTitle]);

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>Some history here</li>
        </ul>
        <nav>
          <p>Made by Brendon</p>
        </nav>
      </section>
      <section className="main">
        <h1>BrendonGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">BrendonGPT may produce inaccurate information about people, places, or facts. BrendonGPT Mar 23 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
