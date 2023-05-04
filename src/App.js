function App() {

  const getMessages = async () => {
    const options = {
      method:'POST',
      body: JSON.stringify({
        message: 'Hello, how are you?'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch('https://8000-brendonrofe-reactchatgp-b3b91exod4b.ws-eu96b.gitpod.io/completions', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
            <input/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">BrendonGPT may produce inaccurate information about people, places, or facts. BrendonGPT Mar 23 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
