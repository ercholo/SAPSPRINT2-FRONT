import { memo } from 'react';
import { useImpresora } from '../hooks/useImpresora';
import PropTypes from 'prop-types';
import { SnackbarAlert } from '../ui/components';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonPausa = memo(({ printer }) => {

    const { pausa, isLoading, alert, setAlert } = useImpresora(printer);

    const onPausar = async() => {
        await pausa();
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

BotonPausa.propTypes = {
    printer: PropTypes.string,
}