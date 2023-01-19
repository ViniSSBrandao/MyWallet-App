import logo from './logo.svg';
import './App.css';
import Login from './Components/Routes/Login';
import SignUp from './Components/Routes/SignUp'
import Home from './Components/Routes/Home/Home';
import Novaentrada from './Components/Routes/NewEntry/Novaentrada';
import NovaSaida from './Components/Routes/NewExit/NovaSaida';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Novaentrada/> */}
      <Home/>
      {/* <NovaSaida/> */}
    </div>
  );
}

export default App;
