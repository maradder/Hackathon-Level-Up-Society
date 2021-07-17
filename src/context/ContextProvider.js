import React, { useState } from "react"
import users from "./users"
const DigiHealthContext = React.createContext()

function DigiHealthContextProvider( props ) {
    const [currentView, setCurrentView] = useState( "/" )

    const [login, setLogin] = useState( {
        username: "",
        password: ""
    } )
    const [signUp, setSignUp] = useState( {
        name: "",
        email: "",
        password: ""
    } )

    const handleChange = e => {
        const { name, value } = e.target
        setLogin( { ...login, [name]: value } )
        setSignUp( { ...signUp, [name]: value } )
    }

    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <DigiHealthContext.Provider value={{ login, signUp, handleSubmit, handleChange, currentView, setCurrentView }}>
            {props.children}
        </DigiHealthContext.Provider>
    )
}

export { DigiHealthContext, DigiHealthContextProvider }