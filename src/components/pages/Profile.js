import React, {useState} from 'react';
import '../../App.css';
import {Card, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {

  const[error, setError]= useState("")
  const {currentUser, logout} =useAuth()      //pobieranie informacji o aktualnie zalogowanym użytkowniku, przypisanie maila, wylogowanie
  const navigate = useNavigate()

  async function handleLogout(){            //bez dopisku async nie działa await logout()
    setError('')

    try 
    {
      await logout()
      navigate('/login')

    } 
    catch 
    {
      setError("Nie udało się poprawnie wylogować")
    }

  }

  return (
    
    <div className='profile'>
      <Card>

        <Card.Body>
          <h2 className="text-center mb-4">Mój Profil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong> {currentUser.email } 
          <Link to="/update-profile" className='Link'>Zaktualizuj dane</Link>

        </Card.Body>

      </Card>
      <div className="w-100 text-center mt-2">
        <Button varinat="link" onClick={handleLogout}>Log Out</Button>
      </div>

    </div>);
}