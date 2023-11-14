import { memo } from 'react';
import { usePausar } from '../hooks/usePausar';
import PropTypes from 'prop-types';
import { SnackbarAlert } from '../ui/components';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonReanuda = memo(({ printer }) => {

    const { getFetch, isLoading, alert, setAlert } = usePausar(printer, 'reanuda');

    const onReanudar = async () => {
        await getFetch();
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-dark"
                disabled={isLoading}
                onClick={() => onReanudar(printer)}
            >
                <i className="bi bi-play-fill"></i>
            </button>
            {alert && <SnackbarAlert accion={"Reanudación"} alert={alert} setAlert={setAlert} />}
        </>
    )
});

BotonReanuda.displayName = 'BotonActualizar';
export default BotonReanuda;

BotonReanuda.propTypes = {
    printer: PropTypes.string,
}