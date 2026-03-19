import "./App.css";

function Welcome() {
  return <h2>Welcome Dan</h2>;
}

function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Welcome />
    </div>
  );
}

export default App;
