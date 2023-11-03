import { memo } from 'react';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonActualizar = memo(({ printer }) => {

    const onActualizar = (printer) => {
        console.log(`Actualizar la impresora ${printer}`)
    }

    return (
        <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => onActualizar(printer)}
        >
            <i className="bi bi-cloud-download-fill"></i>
        </button>
    )
});

BotonActualizar.displayName = 'BotonActualizar';
export default BotonActualizar;

BotonActualizar.propTypes = {
    printer: PropTypes.string,
}