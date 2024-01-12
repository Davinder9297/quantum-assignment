import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import Wave from './wave';
import Register from './Registeration';
import Table from './Table';
import Protected from './Protected';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registeration' element={<Register/>}/>
      <Route path='/data' element={<Protected component={<Table/>}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
