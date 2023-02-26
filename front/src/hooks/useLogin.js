import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password, role) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:3700/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, role })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))


      //dispatch  function is used to trigger actions in a Redux store. 
      //Redux is a state management library that is commonly used in React applications to manage the application's state.
      
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      //the Redux store will update its state based on the logic defined in the corresponding reducer function. 
    

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}