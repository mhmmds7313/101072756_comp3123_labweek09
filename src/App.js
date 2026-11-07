import logo from './logo.svg';
import './App.css';

function App() {
  // Using state/props as requested by the lab
  const studentInfo = {
    id: "101072756",
    name: "Mohammad Akib Shaikh",
    college: "George Brown College, Toronto"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        
        <div style={{ marginTop: '30px', fontSize: '24px' }}>
          <p>{studentInfo.id}</p>
          <p>{studentInfo.name}</p>
          <p>{studentInfo.college}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
