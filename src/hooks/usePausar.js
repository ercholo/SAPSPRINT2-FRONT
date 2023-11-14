import { useState } from "react";
import { useKeycloak } from '@react-keycloak/web';

export const usePausar = (printer, accion, printerDestino) => {

    const { keycloak } = useKeycloak();

    console.log(`use pausar ${printerDestino}`)

    const initialState = {
        data: null,
        isLoading: false,
        hasError: null,
        isOk: false,
    };

    const [state, setState] = useState(initialState);
    const [alert, setAlert] = useState(false);

    const fetchData = async (url) => {
        setState({
            ...initialState,
            isLoading: true,
        });

        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${keycloak.token}`,
                },
            });

            const data = await res.json();
            console.log(data);

            setState({
                data,
                isLoading: false,
                hasError: null,
                isOk: data.ok,
            });

            setAlert(data.ok);

        } catch (error) {
            console.error(error);
            setState({
                ...initialState,
                hasError: error.message,
            });
        }
    };

    const getFetch = () => fetchData(`http://172.30.5.181:16665/impresoras/${printer}/${accion}`);

    const getFetchDesviar = (printerDestino) =>
    
        fetchData(`http://172.30.5.181:16665/impresoras/${printer}/${printerDestino}/${accion}`);

    return {
        getFetch,
        getFetchDesviar,
        data: state.data,
        isLoading: state.isLoading,
        isOk: state.isOk,
        alert,
        setAlert,
        error: state.hasError,
    };
};