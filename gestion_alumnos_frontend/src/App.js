import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaAlumnos from './components/ListaALumnos';
import CrearAlumno from './components/CrearAlumno';
import EditarAlumno from './components/EditarAlumno'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Gestion de Alumnos⚜</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Lista de Alumnos📜</Nav.Link>
                <Nav.Link as={Link} to="/crear">Crear Alumno🧒</Nav.Link>
              </Nav>
            </Navbar.Collapse>          
          </Container>
      </Navbar>
      <Container className="mt-3">
          <Routes>
              <Route path="/" element={<ListaAlumnos />} />
              <Route path="/crear" element={<CrearAlumno/>} />
              <Route path="/editar/:id" element={<EditarAlumno/>} />{/* Nueva ruta para editar*/}
          </Routes>
      </Container>
    </Router>
  );
}

export default App;