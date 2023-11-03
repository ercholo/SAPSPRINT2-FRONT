import { memo } from 'react';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonReanuda = memo(({ printer }) => {

    const onReanudar = (printer) => {
        console.log(`Reanuda la impresora ${printer}`)
    }

    return (
        <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => onReanudar(printer)}
        >
            <i className="bi bi-play-fill"></i>
        </button>
    )
});

BotonReanuda.displayName = 'BotonActualizar';
export default BotonReanuda;

BotonReanuda.propTypes = {
    printer: PropTypes.string,
}