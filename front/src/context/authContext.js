import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
   
  })

  useEffect(() => {
    //in local storage user is a json string so we parse it into an object so we can use in javascript
    const user = JSON.parse(localStorage.getItem('user'))
  
    if (user) {
      //In a Redux application, dispatch is a function that sends an action to the store, which triggers the corresponding reducer function to update the state of the application.
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])
  
  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )
}