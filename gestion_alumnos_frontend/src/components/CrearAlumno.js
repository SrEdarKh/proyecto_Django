import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

// Componente CrearAlumno: permite crear un nuevi alumno enviando los datos a una API REST

const CrearAlumno = () => {
    // estado inicial del formulario
    const [alumno, setAlumno] = useState({
        nombre: '', // Nombre del alumno
        numero_documento: '',// documento del alumno
        nota1: '',//nota 1 del alumno
        nota2: '',//nota 2 del alumno
        nota3: '',//nota 3 del alumno
    });

    // hook para redirigir al usuario a otra ruta
    const navigate = useNavigate();

    // Estado para mostrar alertas
    const [showAlert, setShowAlert] = useState(null);

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        // Actualiza el estado del formulario con el valor ingresado
        setAlumno({ ...alumno, [e.target.name]: e.target.value });
    };

    //maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario
        try {
            //envia los datos del formulario a la api
            const response = await axios.post('http://127.0.0.1:8000/api/alumnos/', alumno);
            //alerta con exito
            setShowAlert ({ variant: 'success', message: 'Alumno creado, La Puteria'});
            // redirige al usuario a la pagina ppal despues de 1.5 sg
            setTimeout(() => navigate('/'), 1500);
        } catch (error) {
            // muestra una alerta de error
            console.error("Error al crear alumno:", error);
            setShowAlert({ variant: 'danger', message: error.message || ' Error , no creo ni chimba..'});
        }
    };

    return (
        <div>
            {/* titulo del formulario */}
            <h2>Crear Nuevo Alumno 🆕</h2>
            {/* alerta condicional: muestra si hay un mesaje de showAlert */}
            {showAlert && (
                <Alert variant={showAlert.variant} onClose={() => setShowAlert(null)} dismissible>
                    {showAlert.message}
                </Alert>
            )}
            {/* Formulario para crear un nuevo alumno */}
            <Form onSubmit={handleSubmit}>
                {/* Campo para el nombre del alumno */}
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={alumno.nombre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* campo para el numero de documento */}
                <Form.Group className="mb-3">
                    <Form.Label>Numero de documento</Form.Label>
                    <Form.Control
                    type="Text"
                    name="numero_documento"
                    value={alumno.numero_documento}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

                {/* Campo para la nota 1 */}
                <Form.Group className="mb-3">
                    <Form.Label>Nota 1</Form.Label>
                    <Form.Control
                    type="number"
                    step="0.01"
                    name="nota1"
                    value={alumno.nota1}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                {/* Campo nota2 */}
                <Form.Group className="mb-3">
                    <Form.Label>Nota 2</Form.Label>
                    <Form.Control
                    type="number"
                    step="0.01"
                    name="nota2"
                    value={alumno.nota2}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                {/* campo Nota 3 */}
                <Form.Group className="mb-3">
                    <Form.Label>Nota 3</Form.Label>
                    <Form.Control
                    type="number"
                    step="0.01"
                    name="nota3"
                    value={alumno.nota3}
                    onChange={handleChange}
                    required
                    />
                </Form.Group>

                {/* Boton para enviar formulario */}
                <Button variant="primary" type="submit">Guardar💾</Button>

                {/* enlace para cancelar y volver a la pagina ppal */}
                <Link to="/" className="btn btn-secudary  ml-2">🔙</Link>
            </Form>
        </div>
    );
};

export default CrearAlumno;