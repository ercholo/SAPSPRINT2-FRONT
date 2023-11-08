
import { memo } from 'react';
import PropTypes from 'prop-types';
import { usePausar } from '../hooks/usePausar';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonPausa = memo(({ printer }) => {

    const { getFetch, isLoading } = usePausar(printer, 'pausa');

    const onPausar = async () => {
        await getFetch();
    }
    
    
    return (
        <button
            type="button"
            className="btn btn btn-outline-primary"
            disabled={ isLoading }
            onClick={onPausar}
        >
            <i className="bi bi-pause-fill"></i>
        </button>
    )
});

BotonPausa.displayName = 'BotonActualizar';
// export default BotonPausa;

BotonPausa.propTypes = {
    printer: PropTypes.string,
}