import { createContext } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
 
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser, 
            setToken
        }}>

        </StateContext.Provider>
    )
}