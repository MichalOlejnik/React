// plik stworzony do odpowiedniego wylogowywania i przenoszenia na stronę logowania
//https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


export default function PrivateRoute({ children }) {
    

    const {currentUser} = useAuth()

    return currentUser ? children : <Navigate to="/login" />;
}