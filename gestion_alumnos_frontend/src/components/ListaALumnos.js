import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // importa iconos para editar

// este componente muestra una lista de alumnos con opciones para editar y eliminar
const ListaAlumnos = () => {
    //Estado para almacenar la lista de usuarios
    const [alumnos, setAlumnos] = useState([]);

    //Estado para manejar la carga de datos
    const [loading, setLoading] = useState(true);

    //Estado para mostrar alertas al eliminar un alumno
    const [deleteAlert, setDeleteAlert] = useState(null);

    // ⚡ Estado para manejar errores al cargar alumnos
    const [error, setError] = useState(null);

    //tamañp de los iconos
    const iconSize = 20;

    // hook useEffect: carga la ista de alumnos al montar l componente
    useEffect(() => {
        fetchAlumnos(); // llama a la funcion para obtener los alumnos
    }, []);

    // Funcion para obtener la lista de alumnos desde la API
    const fetchAlumnos = async () => {
        setLoading(true); // indica los datos que estan cargando
        setError(null); // reinicia el estado de error
        try {
            // realiza una solicitud al GEt para obtener los alumnos
            const response = await axios.get('http://127.0.0.1:8000/api/alumnos/');
            setAlumnos(response.data); // actualiza el estado con los datos obtenidos

        } catch (e) {
            // Maneja errores al cargar los datos
            setError(e.message || 'Error al obtener alumnos.');
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    // Funcion para eliminar un alumno
    const handleDelete = async (id) => {
        // confirma si el usuario quiere eliminar un alumno
        if (window.confirm("¿Estas seguro de elimiar este Alumno?😮")) {
            try {
                // realiza una solicitud DELETE para eliminar el alumno
                await axios.delete(`http://127.0.0.1:8000/api/alumnos/${id}/`);
                //Muestra una alerta de exito
                setDeleteAlert({ variant: 'success', message: 'Alumno eliminado exitosamente!⚡ ' });

                fetchAlumnos(); // Recarga la lista de alumnos despues de eliminar

                setTimeout(() => setDeleteAlert(null), 5000); // oculta la alerta despues de 5 segundos
            } catch (err) {
                // Maneja errores al elimninar el alumno
                setDeleteAlert({ variant: 'danger', message: err.message || 'Error al eliminar alumno' });
                setTimeout(() => setDeleteAlert(null), 3000); // oculta la alerta despues de 3 segundos
            }
        }
    };

    // muestra un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div>Cargando alumnos ....</div>;
    }

    // Muestra un mensaje de derror si ocurre un pronlema al cargar los datos
    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div className="bg-light min-vh-150 p-8">
            {/*Titulo de la pagina */}
            <h2>Lista de Alumnos🎭</h2>

            {/* Boton para crear un nuevo alumno*/}
            <Link to="/crear" className="btn btn-primary mb-3">Crear Nuevo Alumno</Link>

            {/* Alerta condicional: se muestra si hay un mesaje en deleteAlert*/}
            {deleteAlert && <Alert variant={deleteAlert.variant}>{deleteAlert.message}</Alert>}

            {/* Tabla para mostrar la lista de alumnos */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>
                        <th>Promedio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapea alumnos y genera una fila para cada uno */}
                    {alumnos.map(alumno => (
                        <tr key={alumno.id}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.numero_documento}</td>
                            <td>{alumno.nota1}</td>
                            <td>{alumno.nota2}</td>
                            <td>{alumno.nota3}</td>
                            <td>{alumno.promedio ? alumno.promedio.toFixed(2) : 'N/A'}</td>
                            <td className="d-flex gap-2">{/* Usa los flex para alinear los iconos */}
                                {/* Boton para editar el alumno */}
                                <Link to={`/editar/${alumno.id}`} className="btn btn-warning btn-sm">
                                    <FaEdit size={iconSize} /> { /* Icono de editar */}
                                </Link>
                                {/* Boton para eliminar el alumno */}
                                <Button variant="danger" btn-sm onClick={() => handleDelete(alumno.id)}>
                                    <FaTrash size={iconSize} /> {/* icono de eliminar */}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListaAlumnos;
