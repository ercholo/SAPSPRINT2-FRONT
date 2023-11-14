import { Modal } from "bootstrap";
import { memo, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { usePausar } from '../hooks/usePausar';
import { SnackbarAlert, Spinner } from "../ui/components";
const impresorasSapsprint2 = [
    {
        impresora: "16ALAV101",
        ip: "172.30.141.243"
    },
    {
        impresora: "16ALAV201",
        ip: "172.30.141.245"
    },
    {
        impresora: "16ALAV102",
        ip: "172.30.141.244"
    },
    {
        impresora: "16ALAV202",
        ip: "172.30.141.246"
    },
    {
        impresora: "16ALDEV01",
        ip: "172.30.141.247"
    },
    {
        impresora: "16ALEXP01",
        ip: "172.30.141.248"
    },
    {
        impresora: "16ALJEF01",
        ip: "172.30.141.249"
    },
    {
        impresora: "17ADCOM01",
        ip: "172.30.95.243"
    },
    {
        impresora: "17ALAV101",
        ip: "172.30.95.247"
    },
    {
        impresora: "17ALAV102",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALDEV01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ALGVO01",
        ip: "172.30.95.242"
    },
    {
        impresora: "17ALJEF01",
        ip: "172.30.95.245"
    },
    {
        impresora: "17ATTOM01",
        ip: "172.30.141.246"
    },
    {
        impresora: "18ALAV101",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV102",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALAV201",
        ip: "172.30.120.246"
    },
    {
        impresora: "18ALAV202",
        ip: "172.30.120.243"
    },
    {
        impresora: "18ALDEV01",
        ip: "172.30.120.247"
    },
    {
        impresora: "18ALEXP01",
        ip: "172.30.120.245"
    },
    {
        impresora: "18ALJEF01",
        ip: "172.30.120.248"
    },
    {
        impresora: "18ATTOM01",
        ip: "172.30.120.249"
    },
    {
        impresora: "18ATTOM02",
        ip: "172.30.120.244"
    }
]

export const DialogDesviar = memo(({ data, printer, onClose, isOpen }) => {

    //Si existe la prop(cuando llega) coge los dos primeros caracteres para saber de que almacen es la imperesora que se quiere desviar.
    const almImp = data?.impresora?.substring(0, 2) || '';

    const [impresoraDestino, setImpresoraDestino] = useState(null);

    const { getFetchDesviar, isLoading, alert, setAlert } = usePausar(printer, 'desviar', impresoraDestino);


    const onDesviar = async (impresoraDestino) => {
        setImpresoraDestino(impresoraDestino);
        console.log(`onDesviar ${impresoraDestino}`)
        await getFetchDesviar(impresoraDestino);
    }

    useEffect(() => {

        // Inicializar el modal solo cuando el componente se monta
        const myModal = new Modal('#dialogDesviar', {
            keyboard: false
        });

        // Mostrar el modal al abrir
        if (isOpen) {
            myModal.show();
        }

        return () => {
            // Limpiar el modal al desmontar el componente
            myModal.dispose();
        };
    }, [isOpen]);

    return (

        <div className="modal fade" style={{ zIndex: 9050 }} id="dialogDesviar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Desviar impresora {printer} </h1>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            data.desviada ?
                                <div style={{ margin: '8px 0' }}>
                                    {/*Si la impresora está desviada no hacemos nada*/}
                                    <p>LA IMPRESORA ESTÁ DESVIADA, PRIMERO HAY QUE DEVOLVERLA A SU SITIO ORIGINAL</p>
                                </div>
                                :
                                // Mostrar botones para impresoras del mismo almacén
                                impresorasSapsprint2
                                    .filter((impresora) =>
                                        impresora.impresora.startsWith(almImp)
                                    )
                                    .map((impresora) => (
                                        // Excluir el botón con el mismo nombre que estado.impresora
                                        data.impresora !== impresora.impresora && (
                                            <button
                                                type="button"
                                                className="btn btn-outline-info mt-2 btn-sm"
                                                key={impresora.impresora}
                                                onClick={() => onDesviar(impresora.impresora)}
                                                id={impresora.impresora}
                                            >
                                                {impresora.impresora}
                                            </button>
                                        )
                                    ))
                        }
                        {isLoading ? <Spinner loading={isLoading} /> : null}
                        {alert && <SnackbarAlert accion={"Desviada de manera"} alert={alert} setAlert={setAlert}/>}
                    </div>
                    <div className="modal-footer d-flex ">
                        <button type="button" className="btn btn-outline-danger" onClick={onClose}>
                            <i className="bi bi-x-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
});

DialogDesviar.displayName = 'DialogEstado';
export default DialogDesviar;

DialogDesviar.propTypes = {
    printer: PropTypes.string,
    onClose: PropTypes.func,
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
    data: PropTypes.object,
}