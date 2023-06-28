import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Buscador({ filtrarColaboradores }) {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  return (
    <Form.Group controlId="formBusqueda">
      <Form.Control
        type="text"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar colaborador"
      />
    </Form.Group>
  );
}

export default Buscador;
