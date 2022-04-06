import React, { useRef, useState } from 'react';
import '../../App.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'; //Link - pozwoli nam przenieść się z logowania do rejestracji,
//useNavigate - pozwoli nam na przeniesienie się na stronę główną po poprawnym zalogowaniu


export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth() // ,currentUser - NA POTRZEBY TESTÓW
  const [error, setError] = useState("") //potrzebny do wyświetlenia informacji o błędnie powtórzonych hasłach, domyślnie pusty, ponieważ domyślnie nie ma żadnych błędów
  const [loading, setLoading] = useState(false) //domyślnie nie ładujemy, więc ustawiamy na false
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try
    {
      setError("")
      setLoading(true)  //ustawiamy ładowanie, aby użytkownik nie próbował utworzyć wielu kont na raz, poprzez wielokrotne kliknięcie przycisku "rejestracja" 
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/profile') //po prawidłowym zalogowaniu zostaniemy przeniesieni na stronę z profilem użytkownika

    } catch{
      setError('Nie udało się zalogować')
    }
    //Również, gdy użytkownik o podanym mailu już istnieje

    setLoading(false)
    
    
  }

  return (
  
  
  <div className='login'>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Logowanie</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100" type="submit">
              Logowanie
            </Button>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link className='Link' to="/forgot-password">Zapomniałeś hasło?</Link>
          </div>

        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Nie masz jeszcze konta? <Link className='Link' to="/sign-up">Rejestracja</Link>
      </div>
  </div>
  
  
  
  
  );
}