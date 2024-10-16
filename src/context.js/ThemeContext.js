import { createContext, useReducer } from "react";


export const ThemeContext = createContext()

const themeReducer = (state , action) =>{
    switch(action.type) {
        case 'change_color':
            return { ...state , color: action.payload}
        case 'change_mode':
            return { ...state , mode: action.payload}
        default:
            return state
    }
}

export  function ThemeContextProvider ({children}) {
    const [state , dispach] = useReducer(themeReducer , {
        color : '#580580',
        mode : 'light'
    })

    const changeColor = (color) =>{
        dispach({type: 'change_color', payload: color})
    }
    const changeMode = (mode) =>{
        dispach({type: 'change_mode', payload: mode})
    }

    return (
        <ThemeContext.Provider value = {{...state , changeMode , changeColor}}>
                {children}
        </ThemeContext.Provider>
    )
}