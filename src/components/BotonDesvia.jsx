import { DialogDesviar } from './';
import { Spinner } from '../ui/components';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useImpresora } from '../hooks/useImpresora';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonDesviar = memo(({ printer }) => {

    const { estado, isLoading, data } = useImpresora(printer);

    const [isOpen, setIsOpen] = useState(false);

    const onCheckDesvio = async () => {
        await estado();
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

BotonDesviar.propTypes = {
    printer: PropTypes.string,
}