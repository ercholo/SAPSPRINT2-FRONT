import React, { useCallback, useEffect, useState } from 'react';
import { BotonActualizar, BotonEstado, BotonPausa, BotonReanuda, BotonDesviar } from '.';

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip, nombreCorto) {
  return { nameImpresora, numTrabajos, numAlmacen, ip, nombreCorto };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales
const impresorasGerona = [
  createData('12ALAV101', 0, 'RG12','172.30.111.248'),
  createData('12ALAV102', 0, 'RG12','172.30.111.249'),
  createData('12ALDEV01', 0, 'RG12','172.30.111.247'),
  createData('12ALEXP01', 0, 'RG12','172.30.111.246'),
  createData('12ALJEF01', 0, 'RG12','172.30.111.245')
]

export const TablaGerona = React.memo(() => {

  const [, setValor] = useState({});

  const recibirDatosActualizados = useCallback((data) => {

    impresorasGerona.find(printer => {
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
          impresorasGerona.map((impresora) => (
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

TablaGerona.displayName = 'TablaGerona';