
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard'
import './index.css'
import { DetailPlace } from './pages/DetailPlace/DetailPlace'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/place/:id_tempat' element={<DetailPlace />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
