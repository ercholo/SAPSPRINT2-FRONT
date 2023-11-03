import React from 'react';



//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip) {
  return { nameImpresora, numTrabajos, numAlmacen, ip };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales

const impresorasTortosa = [

  createData('16ALAV101', 0, 'RG16', '172.30.141.243'),
  createData('16ALAV201', 0, 'RG16', '172.30.141.245'),
  createData('16ALAV102', 0, 'RG16', '172.30.141.244'),
  createData('16ALAV202', 0, 'RG16', '172.30.141.246'),
  createData('16ALDEV01', 0, 'RG16', '172.30.141.247'),
  createData('16ALEXP01', 0, 'RG16', '172.30.141.248'),
  createData('16ALJEF01', 0, 'RG16', '172.30.141.249'),

]

export const TablaTortosa = React.memo(() => {



  return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Impresora</th>
          <th scope="col">Trabajos</th>
          <th scope="col">Almacén</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {impresorasTortosa.map((impresora) => (
          <tr key={impresora.nameImpresora}>
            <td>{impresora.nameImpresora}</td>
            <td>{impresora.numTrabajos}</td>
            <td>{impresora.numAlmacen}</td>
            <td>{impresora.ip}</td>
            <td>{impresora.ip}</td>
            <td>{impresora.ip}</td>
            <td>{impresora.ip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});


TablaTortosa.displayName = 'TablaTortosa';