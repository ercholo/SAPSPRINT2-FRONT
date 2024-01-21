import React, { useCallback, useEffect, useState, useContext } from 'react';
import { BotonActualizar, BotonEstado, BotonPausa, BotonReanuda, BotonDesviar } from '.';
import { BusquedaContext } from '../context/context';
import { useParams } from 'react-router-dom';

//Funcion para crear las futuras filas (rows)
function createData(nameImpresora, numTrabajos, numAlmacen, ip, nombreCorto) {
    return { nameImpresora, numTrabajos, numAlmacen, ip, nombreCorto };
}

//Llamada a la funcion que genera las filas pasándole datos de relleno iniciales
const impresorasTodas = [
    createData('08ALAV101', 0, 'RG08', '172.30.41.240'),
    createData('08ALAV102', 0, 'RG08', '172.30.41.241'),
    createData('08ALAV201', 0, 'RG08', '172.30.41.242'),
    createData('08ALAV202', 0, 'RG08', '172.30.41.243'),
    createData('08ALDEV01', 0, 'RG08', '172.30.41.244'),
    createData('08ALEXP01', 0, 'RG08', '172.30.41.245'),
    createData('08ALJEF01', 0, 'RG08', '172.30.41.246'),
    createData('06ADCOM01', 0, 'RG06', '172.30.60.247'),
    createData('06ALAV101', 0, 'RG06', '172.30.60.245', 'I065'),
    createData('06ALAV102', 0, 'RG06', '172.30.60.249', 'I066'),
    createData('06ALDEV01', 0, 'RG06', '172.30.60.246', 'I062'),
    createData('06ALEXP01', 0, 'RG06', '172.30.60.101', 'I06M'),
    createData('06ALJEF01', 0, 'RG06', '172.30.60.241', 'I06J'),
    createData('06ATTOM01', 0, 'RG06', '172.30.60.248', 'I064'),
    createData('07ADCOM01', 0, 'RG07', '172.30.70.242', 'I07E'),
    createData('07ALESP01', 0, 'RG07', '172.30.70.248', 'I07C'),
    createData('07ALPAR01', 0, 'RG07', '172.30.70.249', 'I07D'),
    createData('07ALJEF01', 0, 'RG07', '172.30.70.246',),
    createData('15ALJEF02', 0, 'RG15', '172.30.50.248'),
    createData('15ATTOM01', 0, 'RG15', '172.30.50.236'),
    createData('15ADCOM01', 0, 'RG15', '172.30.50.239', 'I15M'),
    createData('15ALDEV01', 0, 'RG15', '172.30.50.248', 'I15P'),
    createData('15ATTOM02', 0, 'RG15', '172.30.50.243', 'I15X'),
    createData('15COGER01', 0, 'RG15', '172.30.50.241', 'I15G'),
    createData('15ALEXP01', 0, 'RG15', '172.30.50.249', 'I15N'),
    createData('15ALENT01', 0, 'RG15', '172.30.50.238', 'I15Q'),
    createData('03ADCOM01', 0, 'RG03', '172.30.30.247', 'I032'),
    createData('03ATTOM01', 0, 'RG03', '172.30.30.246', 'I03T'),
    createData('03ALSAL01', 0, 'RG03', '172.30.30.245', 'I031'),
    createData('03ALAV101', 0, 'RG03', '172.30.30.248', 'I035'),
    createData('03ALAV102', 0, 'RG03', '172.30.30.249', 'I036'),
    createData('12ALAV101', 0, 'RG12', '172.30.111.248'),
    createData('12ALAV102', 0, 'RG12', '172.30.111.249'),
    createData('12ALDEV01', 0, 'RG12', '172.30.111.247'),
    createData('12ALEXP01', 0, 'RG12', '172.30.111.246'),
    createData('12ALJEF01', 0, 'RG12', '172.30.111.245'),
    createData('18ALAV101', 0, 'RG18', '172.30.120.246'),
    createData('18ALAV102', 0, 'RG18', '172.30.120.243'),
    createData('18ALAV201', 0, 'RG18', '172.30.120.246'),
    createData('18ALAV202', 0, 'RG18', '172.30.120.243'),
    createData('18ALDEV01', 0, 'RG18', '172.30.120.247'),
    createData('18ALEXP01', 0, 'RG18', '172.30.120.245'),
    createData('18ALJEF01', 0, 'RG18', '172.30.120.248'),
    createData('18ATTOM01', 0, 'RG18', '172.30.120.249'),
    createData('18ATTOM02', 0, 'RG18', '172.30.120.244'),
    createData('04COGER01', 0, 'RG04', '172.30.133.68'),
    createData('04ALDEV01', 0, 'RG04', '172.30.132.212', 'I04B'),
    createData('04ALCSK01', 0, 'RG04', '172.30.132.217', 'I04S'),
    createData('04ATTOM01', 0, 'RG04', '172.30.132.210', 'I04A'),
    createData('04ALEXP01', 0, 'RG04', '172.30.132.219', 'I04P'),
    createData('04ALJEF02', 0, 'RG04', '172.30.132.211', 'I04T'),
    createData('04COGER02', 0, 'RG04', '172.30.132.215', 'I04C'),
    createData('04COVEN01', 0, 'RG04', '172.30.132.214', 'I04G'),
    createData('04ADCOM01', 0, 'RG04', '172.30.132.221', 'I04H'),
    createData('04ALJEF01', 0, 'RG04', '172.30.132.216', 'I04J'),
    createData('04ALREC01', 0, 'RG04', '172.30.132.220', 'I04Z'),
    createData('19ALREC01', 0, 'RG19', '172.30.91.245', 'I19G'),
    createData('19ALEXP01', 0, 'RG19', '172.30.91.246', 'I19X'),
    createData('19ALJEF01', 0, 'RG19', '172.30.91.250', 'I19J'),
    createData('19ATTOM01', 0, 'RG19', '172.30.91.245', 'I19T'),
    createData('19ATTOM02', 0, 'RG19', '172.30.91.248'),
    createData('19ADCOM01', 0, 'RG19', '172.30.91.247', 'I19A'),
    createData('17ADCOM01', 0, 'RG17', '172.30.95.243'),
    createData('17ALAV101', 0, 'RG17', '172.30.95.247'),
    createData('17ALAV102', 0, 'RG17', '172.30.95.242'),
    createData('17ALDEV01', 0, 'RG17', '172.30.95.245'),
    createData('17ALGVO01', 0, 'RG17', '172.30.95.242'),
    createData('17ALJEF01', 0, 'RG17', '172.30.95.245'),
    createData('17ATTOM01', 0, 'RG17', '172.30.95.246'),
    createData('01ALAV101', 0, 'RG01', '172.30.2.51', 'AV11'),
    createData('01ALAV102', 0, 'RG01', '172.30.2.50', 'I02Z'),
    createData('01ALAV201', 0, 'RG01', '172.30.2.52', 'AV21'),
    createData('01ALAV202', 0, 'RG01', '172.30.2.56', 'I02C'),
    createData('01ALDEV01', 0, 'RG01', '172.30.2.91', 'I02B'),
    createData('01ALENT01', 0, 'RG01', '172.30.2.40'),
    createData('01ALJEF01', 0, 'RG01', '172.30.2.58'),
    createData('01ALPSI01', 0, 'RG01', '172.30.2.46', 'I022'),
    createData('01ALPYE01', 0, 'RG01', '172.30.2.5'),
    createData('01ALPYE02', 0, 'RG01', '172.30.2.34', 'I027'),
    createData('01ALSAA01', 0, 'RG01', '172.30.2.23', 'IO2U'),
    createData('01ALSAF01', 0, 'RG01', '172.30.2.33', 'I02D'),
    createData('01ALSAL01', 0, 'RG01', '172.30.2.12', 'I03R'),
    createData('01ATTOM01', 0, 'RG01', '172.30.2.35', 'I02F'),
    createData('01ATTOM02', 0, 'RG01', '172.30.2.120', 'I02J'),
    createData('01ALPLA01', 0, 'RG01', '172.30.2.66', 'I02P'),
    createData('16ALAV101', 0, 'RG16', '172.30.141.243'),
    createData('16ALAV201', 0, 'RG16', '172.30.141.245'),
    createData('16ALAV102', 0, 'RG16', '172.30.141.244'),
    createData('16ALAV202', 0, 'RG16', '172.30.141.246'),
    createData('16ALDEV01', 0, 'RG16', '172.30.141.247'),
    createData('16ALEXP01', 0, 'RG16', '172.30.141.248'),
    createData('16ALJEF01', 0, 'RG16', '172.30.141.249'),
    createData('11ALDEV01', 0, 'RG11', '172.30.102.233'),
    createData('11ALENT01', 0, 'RG11', '172.30.102.232'),
    createData('11ALENT02', 0, 'RG11', '172.30.102.197'),
    createData('11ALEST01', 0, 'RG11', '172.30.102.239'),
    createData('11ALFRI01', 0, 'RG11', '172.30.102.238'),
    createData('11ALPKG01', 0, 'RG11', '172.30.102.235'),
    createData('11ALSAF01', 0, 'RG11', '172.30.102.240'),
    createData('11ALSAF02', 0, 'RG11', '172.30.102.241')
]

export const TablaBusqueda = React.memo(() => {
    
    const params = useParams();
    console.log(params)
    const [, setValor] = useState({});

    const { terminoBusqueda } = useContext(BusquedaContext);

    const realizarBusquedaGlobal = useCallback(() => {
        const datosBusqueda = impresorasTodas.filter(impresora =>
            Object.values(impresora).some(value =>
                value && value.toString().toLowerCase().includes(terminoBusqueda?.toLowerCase())
            )
        );

        return datosBusqueda || [];

    }, [terminoBusqueda]);

    const recibirDatosActualizados = useCallback((data) => {

        impresorasTodas.find(printer => {

            //Si la impresora coincide y los datos son distintos de los que ya teníamos entonces tralarí 
            if (data?.impresora === printer.nameImpresora) {
                printer.numTrabajos = data.valor
            }
            setValor(() => data);
        });
    }, []);

    useEffect(() => {
        recibirDatosActualizados();
    }, [terminoBusqueda, recibirDatosActualizados]);

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
                    realizarBusquedaGlobal().map((impresora) => (
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

TablaBusqueda.displayName = 'TablaBusqueda';