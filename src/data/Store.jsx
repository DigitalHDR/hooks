import React, { useState } from 'react'

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
            //key : value vai alterar somente um valor específico
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
            //aqui é para que sejá alterado somente uma parte da aplicção
            //e não o estado inteiro    
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store