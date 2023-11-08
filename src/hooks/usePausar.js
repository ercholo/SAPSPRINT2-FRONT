import { useState } from "react";
import { useKeycloak } from '@react-keycloak/web'

export const usePausar = (printer, accion) => {

    const { keycloak } = useKeycloak();

    const [state, setState] = useState({

        data: null,
        isLoading: false,
        hasError: null,

    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        try {

            const res = await fetch(`http://172.30.5.181:16665/impresoras/${printer}/${accion}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${keycloak.token}`
                }
            });

            const data = await res.json();
            console.log(data)

            setState({
                data,
                isLoading: false,
                hasError: null,
            });

        } catch (error) {
            console.log(error);
        }

    }

    return ({
        getFetch,
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,

    });

}