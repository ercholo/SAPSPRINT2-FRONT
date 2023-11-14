import { memo } from 'react';
import { usePausar } from '../hooks/usePausar';
import PropTypes from 'prop-types';
import { SnackbarAlert } from '../ui/components';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonPausa = memo(({ printer }) => {

    const { getFetch, isLoading, alert, setAlert } = usePausar(printer, 'pausa');

    const onPausar = async() => {
        await getFetch();
    }

    return (
        <>
            <button
                type="button"
                className="btn btn btn-outline-primary"
                disabled={isLoading}
                onClick={onPausar}
            >
                <i className="bi bi-pause-fill"></i>
            </button>
            {alert && <SnackbarAlert accion={"Pausa"} alert={alert} setAlert={setAlert}/>}
        </>
    )
});

BotonPausa.displayName = 'BotonActualizar';
// export default BotonPausa;

BotonPausa.propTypes = {
    printer: PropTypes.string,
}