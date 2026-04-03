import GitHubCalendar from "react-github-calendar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Suneel</h1>
      <p className="subtitle">Full-Stack Developer</p>

      <div className="links">
        <a href="https://github.com/suneel27" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://suneel27.github.io/commit/" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </div>

      <section className="card">
        <h2>GitHub Contributions</h2>
        <div className="calendar">
          <GitHubCalendar username="suneel27" />
        </div>
      </section>
    </div>
  );
}
