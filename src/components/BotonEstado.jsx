import { useState, memo } from 'react';
import { usePausar } from '../hooks/usePausar';
import { DialogEstado } from './';
import { Spinner } from '../ui/components';
import PropTypes from 'prop-types';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonEstado = memo(({ printer }) => {

    const { getFetch, isLoading, data } = usePausar(printer, 'estado');

    const [isOpen, setIsOpen] = useState(false);

    const onEstado = async() => {
        await getFetch();
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                disabled={isLoading}
                className="btn btn-outline-warning"
                onClick={() => onEstado(printer)}
            >
                <i className="bi bi-question-circle-fill"></i>
            </button>
            {isLoading ? <Spinner loading={isLoading} /> : null}
            {isOpen && (
                <DialogEstado onClose={closeDialog} isOpen={isOpen} setIsOpen={setIsOpen} printer={printer} data={data} />
            )}
        </>
    )
});

BotonEstado.displayName = 'BotonActualizar';
export default BotonEstado;

BotonEstado.propTypes = {
    printer: PropTypes.string,
}