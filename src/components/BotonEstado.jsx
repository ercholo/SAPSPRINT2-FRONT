
import { memo } from 'react';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonEstado = memo(({ printer }) => {

    const onEstado = (printer) => {
        console.log(`Estado la impresora ${printer}`)
    }

    return (
        <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => onEstado(printer)}
        >
            <i className="bi bi-question-circle-fill"></i>
        </button>
    )
});

BotonEstado.displayName = 'BotonActualizar';
export default BotonEstado;

BotonEstado.propTypes = {
    printer: PropTypes.string,
}