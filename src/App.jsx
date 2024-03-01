import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Application from './pages/Application'
import { useUserStore } from './store/UserStore'
import Navbar from './components/application/Navbar'
import Jobs from './pages/Jobs'
import Login from './pages/auth/Login'

function App() {
  const { user } = useUserStore()
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/application' element={<Application />}>
            <Route path='/application/job' element={<Jobs />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
