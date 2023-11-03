
import { memo } from 'react';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonPausa = memo(({ printer }) => {

    const onPausar = (printer) => {
        console.log(`Pausa la impresora ${printer}`)
    }

    return (
        <button
            type="button"
            className="btn btn btn-outline-primary"
            onClick={() => onPausar(printer)}
        >
            <i className="bi bi-pause-fill"></i>
        </button>
    )
});

BotonPausa.displayName = 'BotonActualizar';
export default BotonPausa;

BotonPausa.propTypes = {
    printer: PropTypes.string,
}