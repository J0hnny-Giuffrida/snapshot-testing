import logo from './logo.svg';
import './App.css';
import GitCard from './components/GitHubCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>TESTING SNAPSHOT</h2>
        <GitCard />
      </header>
    </div>
  );
}

export default App;
