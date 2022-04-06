//auth.onAuthStateChanged - Firebase - ma własną metodę oznaczenia, że nowy użytkownik został stworzony
//stworzy go za nas

import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext= React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    
    const[currentUser, setCurrentUser] = useState()
    const[loading, setLoading] = useState(true) //ładowanie z defaultu, najpierw sprawdzi, czy nie mamy już zalogowanego użytkownika

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    //Firebase sprawdzi za nas czy mamy już zalogowanego użytkownika, ustala "local storage" za nas

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password) //Jeśli chcemy zrezygnować z używania Firebase, wystarczy zmienić tę funkcję
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
      
    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }
    
    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)        // setCurrentUser(user) koniecznie przed setLoading()
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword  
    }

    //{!loading && children} - jeśli nie ładujemy, renderujemy "children"
    //nie ma możliwości zalogowania się, jeśli jest już zalogowany jakiś użytkownik    
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
