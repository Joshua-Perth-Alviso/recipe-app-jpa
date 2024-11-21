import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element = {<MainLayout> <Home/> </MainLayout>}/>
        <Route path='/about' element = {<MainLayout> <About/> </MainLayout>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
