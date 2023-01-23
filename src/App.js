import logo from './logo.svg';
import './App.css';
import Login from './Components/Routes/Login';
import SignUp from './Components/Routes/SignUp'
import Home from './Components/Routes/Home/Home';
import Novaentrada from './Components/Routes/NewEntry/Novaentrada';
import NovaSaida from './Components/Routes/NewExit/NovaSaida';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/"/>
          <Route element={<SignUp/>} path="/cadastro"/>
          <Route element={<Novaentrada/>} path="/nova-entrada"/>
          <Route element={<Home/>} path="/home"/>
          <Route element={<NovaSaida/>} path="/nova-saida"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
