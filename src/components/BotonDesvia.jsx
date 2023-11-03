
import { memo } from 'react';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonDesviar = memo(({ printer }) => {

    const onDesviar = (printer) => {
        console.log(`Desvia la impresora ${printer}`)
    }

    return (
        <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => onDesviar(printer)}
        >
            <i className="bi bi-sign-turn-left-fill"></i>
        </button>
    )
});

BotonDesviar.displayName = 'BotonActualizar';
export default BotonDesviar;

BotonDesviar.propTypes = {
    printer: PropTypes.string,
}