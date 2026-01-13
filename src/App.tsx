import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UserPage } from './pages/UserPage'
import { UserListPage } from './pages/UserListPage'

function App() {
return(
  <BrowserRouter>
    <div className="conteiner">
    <Routes>
      <Route path="/" element={<UserListPage/>}/>
      <Route path="/users" element={<UserPage/>}/>
    </Routes>
    </div>
  </BrowserRouter>
)

 
}

export default App
