import { Route, Routes, Link } from 'react-router-dom'
import Budget from './components/Budget'
import Intro from './components/Intro'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-warning'>
          <ul className='d-flex flex-row navbar-nav m-auto fs-4 fw-bolder'>
            <li className='nav-item me-4'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/budget'>
                Budget
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
    </>
  )
}

export default App
