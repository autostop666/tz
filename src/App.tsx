import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { UserPage } from './pages/UserPage'
import { UserListPage } from './pages/UserListPage'

function App() {
return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserListPage/>}/>
      <Route path="/users/:id" element={<UserPage/>}/>
      <Route path="/users/new" element={<UserPage/>}/>
    </Routes>
  </BrowserRouter>
)

 
}

export default App
