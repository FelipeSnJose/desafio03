import Alert from 'react-bootstrap/Alert';

function Alerts({ mensaje, tipo }) {
  return (
    <>
      {mensaje && (
        <Alert variant={tipo === 'exito' ? 'success' : 'danger'}>{mensaje}</Alert>
      )}
    </>
  );
}

export default Alerts;
