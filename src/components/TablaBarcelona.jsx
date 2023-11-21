import React, { useCallback, useEffect, useState } from 'react';
import { BotonActualizar, BotonEstado, BotonPausa, BotonReanuda, BotonDesviar } from '.';

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip, nombreCorto) {
  return { nameImpresora, numTrabajos, numAlmacen, ip,nombreCorto };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales
const impresorasBarcelona = [
  createData('15ALJEF02', 0, 'RG15','172.30.50.248'),
  createData('15ATTOM01', 0, 'RG15','172.30.50.236'),
  createData('15ADCOM01', 0, 'RG15','172.30.50.239','I15M'),
  createData('15ALDEV01', 0, 'RG15','172.30.50.248','I15P'),
  createData('15ATTOM02', 0, 'RG15','172.30.50.243','I15X'),
  createData('15COGER01', 0, 'RG15','172.30.50.241','I15G'),
  createData('15ALEXP01', 0, 'RG15','172.30.50.249','I15N'),
  createData('15ALENT01', 0, 'RG15','172.30.50.238','I15Q')
]

export const TablaBarcelona = React.memo(() => {

  const [, setValor] = useState({});

  const recibirDatosActualizados = useCallback((data) => {

    impresorasBarcelona.find(printer => {
      //Si la impresora coincide y los datos son distintos de los que ya teníamos entonces tralarí 
      if (data?.impresora === printer.nameImpresora) {
        printer.numTrabajos = data.valor
      }
      setValor(() => data)
    });
  }, []);

  useEffect(() => {
    recibirDatosActualizados();
  }, [recibirDatosActualizados]);

  return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Impresora</th>
          <th scope="col">Trabajos</th>
          <th scope="col">Actualizar</th>
          <th scope="col">Pausar</th>
          <th scope="col">Reanudar</th>
          <th scope="col">Estado</th>
          <th scope="col">Desviar</th>
        </tr>
      </thead>
      <tbody>
        {
          impresorasBarcelona.map((impresora) => (
            <tr key={impresora.nameImpresora}>
              <td>{impresora.nameImpresora}</td>
              <td>{impresora.numTrabajos}</td>
              <td>{<BotonActualizar printer={impresora.nameImpresora} recibirDatos={recibirDatosActualizados} />}</td>
              <td>{<BotonPausa printer={impresora.nameImpresora} />}</td>
              <td>{<BotonReanuda printer={impresora.nameImpresora} />}</td>
              <td>{<BotonEstado printer={impresora.nameImpresora} />}</td>
              <td>{<BotonDesviar printer={impresora.nameImpresora} />}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
});

TablaBarcelona.displayName = 'TablaBarcelona';