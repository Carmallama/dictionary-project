import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary app</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Coded by{" "}
          <a
            href="https://github.com/Carmallama/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Carm
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
