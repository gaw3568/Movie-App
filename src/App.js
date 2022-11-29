import logo from './logo.svg';
import "./App.css";

function App() {

  return (
    <div className="App">
      <div>
        <h4>블로그임</h4>
      </div>
      <Blog1></Blog1>

    </div>
  );
}

function Blog1() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>Date</p>
      <p>Detail Text</p>
    </div>
  )
}

export default App;
