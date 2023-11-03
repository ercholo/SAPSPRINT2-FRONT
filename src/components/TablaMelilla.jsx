import React from 'react';



//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip) {
  return { nameImpresora, numTrabajos, numAlmacen, ip };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales

const impresorasMelilla = [

  createData('17ADCOM01', 0, 'RG17', '172.30.95.243'),
  createData('17ALAV101', 0, 'RG17', '172.30.95.247'),
  createData('17ALAV102', 0, 'RG17', '172.30.95.242'),
  createData('17ALDEV01', 0, 'RG17', '172.30.95.245'),
  createData('17ALGVO01', 0, 'RG17', '172.30.95.242'),
  createData('17ALJEF01', 0, 'RG17', '172.30.95.245'),
  createData('17ATTOM01', 0, 'RG17', '172.30.95.246')

]

export const TablaMelilla = React.memo(() => {



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
        {impresorasMelilla.map((impresora) => (
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


TablaMelilla.displayName = 'TablaMelilla';