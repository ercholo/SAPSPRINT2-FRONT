import { DialogDesviar } from './';
import { Spinner } from '../ui/components';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { usePausar } from '../hooks/usePausar';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonDesviar = memo(({ printer }) => {

    const { getFetch, isLoading, data } = usePausar(printer, 'estado');

    const [isOpen, setIsOpen] = useState(false);

    const onCheckDesvio = async () => {
        await getFetch();
        setIsOpen(true);
    }

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => onCheckDesvio(printer)}
            >
                <i className="bi bi-sign-turn-left-fill"></i>
            </button>
            {isLoading ? <Spinner loading={isLoading} /> : null}
            {isOpen && (
                <DialogDesviar onClose={closeDialog} isOpen={isOpen} setIsOpen={setIsOpen} printer={printer} data={data} />
            )}
        </>
    )
});

BotonDesviar.displayName = 'BotonActualizar';
export default BotonDesviar;

BotonDesviar.propTypes = {
    printer: PropTypes.string,
}