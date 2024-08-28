import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './layout/Home';
import User from './layout/User';
import AddUser from './layout/AddUser';
import Edit from './layout/Edit';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<Edit />} />



      </Routes>
    </div>
  )
}

export default App
