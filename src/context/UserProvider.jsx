import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types';

export const UserProvider = ({ children }) => {

    const [estado, setEstado] = useState({});

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{ estado, setEstado }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.object,
}