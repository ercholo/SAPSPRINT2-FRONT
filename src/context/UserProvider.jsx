import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types';

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: "Gregor",
    //     mail: "goyo_ON@yahoo.es"
    // }

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.object,
}