import { createContext, useReducer } from "react";


export const ThemeContext = createContext()

const themeReducer = (state , action) =>{
    switch(action.type) {
        case 'change_color':
            return { ...state , color: action.payload}
        default:
            return state
    }
}

export  function ThemeContextProvider ({children}) {
    

    const [state , dispach] = useReducer(themeReducer , {
        color : '#580580'
    })

    const changeColor = (color) =>{
        dispach({type: 'change_color', payload: color})
    }

    return (
        <ThemeContext.Provider value = {{...state , changeColor}}>
                {children}
        </ThemeContext.Provider>
    )
}