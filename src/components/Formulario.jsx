import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formulario({ agregarColaborador }) {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador(nuevoColaborador);
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNombre">
        <Form.Control
          type="text"
          name="nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
          placeholder='Nombre del colaborador'
        />
      </Form.Group>

      <Form.Group controlId="formCorreo">
        <Form.Control
          type="email"
          name="correo"
          value={nuevoColaborador.correo}
          onChange={handleChange}
          placeholder='Email del colaborador'
        />
      </Form.Group>

      <Form.Group controlId="formEdad">
        <Form.Control
          type="text"
          name="edad"
          value={nuevoColaborador.edad}
          onChange={handleChange}
          placeholder='Edad del colaborador'
        />
      </Form.Group>

      <Form.Group controlId="formCargo">
        <Form.Control
          type="text"
          name="cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
          placeholder='Cargo del colaborador'
        />
      </Form.Group>

      <Form.Group controlId="formTelefono">
        <Form.Control
          type="text"
          name="telefono"
          value={nuevoColaborador.telefono}
          onChange={handleChange}
          placeholder='Teléfono del colaborador'
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
}

export default Formulario;
