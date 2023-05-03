function App() {
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
            <div id="submit">➢</div>
          </div>
          <p className="info">BrendonGPT may produce inaccurate information about people, places, or facts. BrendonGPT Mar 23 Version</p>
        </div>
      </section>
    </div>
  );
}

export default App;
