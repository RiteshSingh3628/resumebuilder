import Navbar from './components/Navbar'
import T1 from './templates/T1'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
//  name, email, phone, address, summary, skills, experience, education
  
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/templets' element={<Home/>}/>
          <Route path ='/about' element={<Home/>}/>
          <Route path ='/contact' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
