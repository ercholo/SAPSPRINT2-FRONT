import { memo } from 'react';
import PropTypes from 'prop-types';
import { usePausar } from '../hooks/usePausar';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonActualizar = memo(({ printer }) => {

    const { getFetch, data, isLoading } = usePausar(printer, '');

    const onActualizar = async () => {
        await getFetch();
        console.log(data)
    }

    return (
        <button
            type="button"
            className="btn btn-outline-success"
            disabled={ isLoading }
            onClick={ onActualizar }
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