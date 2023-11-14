import { memo, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import PropTypes from 'prop-types';
import { Spinner } from '../ui/components';

//uso el memo para que no renderice los botones cuando el componente padre (tablaPrincipal) cambia el estado actualizando la tabla
export const BotonActualizar = memo(({ printer, recibirDatos }) => {

    const { keycloak } = useKeycloak();

    const [loading, setLoading] = useState(false);

    const onActualizar = async () => {

        setLoading(true);

        try {

            const res = await fetch(`http://172.30.5.181:16665/impresoras/${printer}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${keycloak.token}`
                }
            });

            const data = await res.json();

            recibirDatos(data)
            // console.log(data)

            setLoading(false);

        } catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-success"
                disabled={loading}
                onClick={onActualizar}
            >
                <i className="bi bi-cloud-download-fill"></i>
            </button>
            {loading ? <Spinner loading={loading} /> : null}
        </>
    )
});

BotonActualizar.displayName = 'BotonActualizar';
export default BotonActualizar;

BotonActualizar.propTypes = {
    printer: PropTypes.string,
    recibirDatos: PropTypes.func
}