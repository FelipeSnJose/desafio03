import { useState } from 'react';
import Alerts from './components/Alerts';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './bd/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.correo === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      setMensaje('Todos los campos son requeridos');
      setTipoMensaje('error');
    } else {
      const id = Math.floor(Math.random() * 1000).toString();
      const colaborador = { id, ...nuevoColaborador };
      setColaboradores([...colaboradores, colaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setTipoMensaje('exito');
    }
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setMensaje('Colaborador eliminado exitosamente');
    setTipoMensaje('exito');
  };

  const filtrarColaboradores = (busqueda) => {
    const nuevosColaboradores = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((valor) =>
        valor.toLowerCase().includes(busqueda.toLowerCase())
      )
    );
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className="container">
      <div className="titulo"><h1>Lista de colaboradores</h1></div>
      <div className="buscador">
        <Buscador filtrarColaboradores={filtrarColaboradores} />
      </div>
      <div className="lista">
        <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
      </div>
      <div className="formulario">
        <h2>Agregar colaborador</h2>
        <Formulario agregarColaborador={agregarColaborador} />
      </div>
      <div className="alert">
        <Alerts mensaje={mensaje} tipo={tipoMensaje} />
      </div>
    </div>
  );
}

export default App;