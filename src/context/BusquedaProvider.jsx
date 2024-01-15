import { useState } from "react";
import { BusquedaContext } from "./context";
import PropTypes from 'prop-types';

export const BusquedaProvider = ({ children }) => {

    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    const [ busqueda, setBusqueda ] = useState(false);

    return (
        
        <BusquedaContext.Provider value={{ terminoBusqueda, setTerminoBusqueda, busqueda, setBusqueda }}>
            {children}
        </BusquedaContext.Provider>
    )
}

BusquedaProvider.propTypes = {
    children: PropTypes.object,
}