import { memo } from 'react';
import { usePausar } from '../hooks/usePausar';
// import { DialogDesviar } from './';
import { SnackbarAlert, Spinner } from '../ui/components';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonRestableceIP = memo(({ printer, isDisabled }) => {

    const { getFetch, isLoading, alert, setAlert } = usePausar(printer, 'desviarImpresoraOriginal');

    const onRestablecer = async () => {
        await getFetch();
    };

    return (
        <>
            <button
                type="button"
                disabled={isDisabled}
                className="btn btn btn-secondary"
                onClick={() => onRestablecer(printer)}
            >
                <i className="bi bi-arrow-repeat"></i>
            </button>
            {isLoading ? <Spinner loading={isLoading} /> : null}
            {alert && <SnackbarAlert accion={"Restablecida de manera"} alert={alert} setAlert={setAlert}/>}
        </>
    )
});

BotonRestableceIP.displayName = 'BotonRestableceIP';
export default BotonRestableceIP;

BotonRestableceIP.propTypes = {
    printer: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClose: PropTypes.func,
}