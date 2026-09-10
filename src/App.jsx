import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Docker React CI/CD Application</h1>

      <p className="success">
        Application is running successfully!
      </p>

      <div className="card">
        <h2>Deployment Flow</h2>

        <p>React → Docker → Docker Hub → EC2</p>

        <p>
          GitHub Actions automatically deploys new versions.
        </p>
      </div>

      <div className="card">
        <h2>Technology Stack</h2>

        <p>React</p>
        <p>Vite</p>
        <p>Docker</p>
        <p>Nginx</p>
        <p>GitHub Actions</p>
        <p>AWS EC2</p>
      </div>

      <footer>
        Docker CI/CD Demo
      </footer>
    </div>
  );
}

export default App;
