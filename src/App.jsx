

import './App.css'
import Headers from './components/Header'
import { Container, Row, Col } from 'reactstrap'
import Menu from './components/Menu'
import Home from './components/Home'

import ViewCourse from './components/ViewCourse'
import About from './components/About'
import Contact from './components/Contact'
import AddCourse from './components/AddCourse'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  

  return (
    <>
   <Router>
     <Headers />
     <Container>
       <Row>
        <Col md={4}>
          <Menu />
        </Col>

        <Col md={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/view-course" element={<ViewCourse />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Col>
       </Row>
     </Container>
   </Router>
    </>
  )
}

export default App
