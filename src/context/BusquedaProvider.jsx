import { useState } from "react";
import { BusquedaContext } from "./context";
import PropTypes from 'prop-types';

export const BusquedaProvider = ({ children }) => {

    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    return (
        
        <BusquedaContext.Provider value={{ terminoBusqueda, setTerminoBusqueda }}>
            {children}
        </BusquedaContext.Provider>
    )
}

BusquedaProvider.propTypes = {
    children: PropTypes.object,
}