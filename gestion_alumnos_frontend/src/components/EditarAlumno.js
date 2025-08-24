import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';


// Componente EditarAlumno: permite editar los datos de un alumno existente
const EditarAlumno = () => {
    // Obtiene el parámetro `id` de la URL
    const { id } = useParams();


    // Hook para redirigir al usuario a otra ruta
    const navigate = useNavigate();


    // Estado inicial del formulario con los datos del alumno
    const [alumno, setAlumno] = useState({
        nombre: '', // Nombre del alumno
        numero_documento: '', // Número de documento del alumno
        nota1: '', // Nota 1 del alumno
        nota2: '', // Nota 2 del alumno
        nota3: '', // Nota 3 del alumno
    });


    // Estado para manejar la carga de datos
    const [loading, setLoading] = useState(true);


    // Estado para manejar errores al cargar o actualizar datos
    const [error, setError] = useState(null);


    // Estado para mostrar alertas (éxito o error)
    const [showAlert, setShowAlert] = useState(null);


    // Hook useEffect: carga los datos del alumno al montar el componente
    useEffect(() => {
        const fetchAlumno = async () => {
            setLoading(true); // Indica que los datos están cargando
            setError(null); // Reinicia el estado de error
            try {
                // Realiza una solicitud GET para obtener los datos del alumno
                const response = await axios.get(`http://127.0.0.1:8000/api/alumnos/${id}/`);
                setAlumno(response.data); // Actualiza el estado con los datos del alumno
            } catch (err) {
                // maneja errores al cargar los datos
                setError(err.message || 'Error al cargar el alumno.');
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchAlumno();
    }, [id]); // se ejecuta cuando se cambia el id

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        // actualiza el estado del formulario con el valor ingresado
        setAlumno({ ...alumno, [e.target.name]: e.target.value });
    };

    // Maneja el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // previene el comportamiento por defecto del formulario
        try {
            // Realiza una solicitud put para actualizar datos
            await axios.put(`http://127.0.0.1:8000/api/alumnos/${id}/`, alumno);
            // muestra una alerta con exito
            setShowAlert({variant: 'success', message: 'Alumno actualizado exitosamente!!!!🎈🎆🎈🎆'});
            // Redirige al usuario a la pagina ppal despues de 1.5 sgs

            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            // maneja errores al actualizar datos
            console.error("error al actualizar alumno:", err);
            setShowAlert({ variant: 'danger', message: err.message || 'Error al actualizar el alumno'});
        }
    };

    // muestra un mensajje de carga mientras se obtienen los datos
    if (loading) {
        return <div> Cargando informacion del alumno ... 🎭</div>;
    }
    // muestra mensaje de error por si ocurre un problema al cargar los datos
    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div>
            {/* Titulo del formulario */}
            <h2>Editar alumno✍</h2>

            {/* alerta condicional: se muestra si hay un mensajde de showAlert */}
            {showAlert && (
                <Alert variant={showAlert.variant} onClose={() => setShowAlert(null)} dismissible>
                    {showAlert.message}
                </Alert>
            )}

            {/* Formulario para editar los datos del alumno */}
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
                        {/* Campo para la Nota 1 */}
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


            {/* Campo para la Nota 2 */}
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

            {/* Campo para la nota 3 */}
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

            {/* boton para enviar el formulario */}
            <Button variant="primary" type="submit">Guardar Cambios 💾</Button>

            {/* enlace para cancelar y volver a la pagina ppal */}
            <Link to="/" className="btn btn-secundary ml-2">Cancelar🛑</Link>
            </Form>
        </div>
    );
};

export default EditarAlumno;