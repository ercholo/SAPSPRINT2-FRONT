import React from 'react';
import { BotonActualizar, BotonEstado, BotonPausa, BotonReanuda, BotonDesviar } from './';

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip) {
  return { nameImpresora, numTrabajos, numAlmacen, ip };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales

const impresorasGranada = [

  createData('18ALAV101', 0, 'RG18', '172.30.120.246'),
  createData('18ALAV102', 0, 'RG18', '172.30.120.243'),
  createData('18ALAV201', 0, 'RG18', '172.30.120.246'),
  createData('18ALAV202', 0, 'RG18', '172.30.120.243'),
  createData('18ALDEV01', 0, 'RG18', '172.30.120.247'),
  createData('18ALEXP01', 0, 'RG18', '172.30.120.245'),
  createData('18ALJEF01', 0, 'RG18', '172.30.120.248'),
  createData('18ATTOM01', 0, 'RG18', '172.30.120.249'),
  createData('18ATTOM02', 0, 'RG18', '172.30.120.244')
]

export const TablaGranada = React.memo(() => {



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
        {impresorasGranada.map((impresora) => (
          <tr key={impresora.nameImpresora}>
            <td>{impresora.nameImpresora}</td>
            <td>{impresora.numTrabajos}</td>
            <td>{<BotonActualizar printer={impresora.nameImpresora} />}</td>
            <td>{<BotonPausa printer={impresora.nameImpresora} />}</td>
            <td>{<BotonReanuda printer={impresora.nameImpresora} />}</td>
            <td>{<BotonEstado printer={impresora.nameImpresora} />}</td>
            <td>{<BotonDesviar printer={impresora.nameImpresora} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});


TablaGranada.displayName = 'TablaGranada';