import "./App.css";

function Welcome() {
  return <h2>Hello Dan</h2>;
}

function Button() {
  return <button>Click me</button>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
