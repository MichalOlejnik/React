/*
https://www.youtube.com/watch?v=PKwu15ldZ7k&ab_channel=WebDevSimplified
w wersji Auth-Production na Firebase, usuwamy localhost - brak dostępu przez localhost
npm install firebase
npm i react-router-dom
https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom

Na potrzeby tworzenia nowego konta polecam: https://temp-mail.org/pl/
*/

import React, { useRef, useState } from 'react';
import '../../App.css';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'; //Link - pozwoli nam przenieść się z logowania do rejestracji,
//useNavigate - pozwoli nam na przeniesienie się na stronę główną po poprawnym zalogowaniu

export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth() // ,currentUser - NA POTRZEBY TESTÓW
  const [error, setError] = useState("") //potrzebny do wyświetlenia informacji o błędnie powtórzonych hasłach, domyślnie pusty, ponieważ domyślnie nie ma żadnych błędów
  const [loading, setLoading] = useState(false) //domyślnie nie ładujemy, więc ustawiamy na false
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value)//czy oba wprowadzone hasła są identyczne
    {
      return setError("Hasła nie są identyczne!")
    }

    try
    {
      setError("")
      setLoading(true)  //ustawiamy ładowanie, aby użytkownik nie próbował utworzyć wielu kont na raz, poprzez wielokrotne kliknięcie przycisku "rejestracja" 
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/profile')   //po prawidłowym zarejestrowaniu zostaniemy przeniesieni na stronę z profilem użytkownika
    } catch{
      setError('Nie udało się utworzyć nowego konta')
    }
    //Również, gdy użytkownik o podanym mailu już istnieje

    setLoading(false)
    
    
  }

  /*    UŻYTE NA POTRZEBY TESTÓW
  JSON.stringify(currentUser)
  {currentUser.email}, wprowadzony pod <h2> - wyświetli nowowprowadzonego użytkowanika
  Dzięki czemu wiemy, czy proces rejestracji przebiega pomyślnie i czy ktoś jest aktualnie zalogowany
  */

  return (
  
  
  <div className='sign-up'>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Rejestracja</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Powtórz hasło</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Rejestracja
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Masz już konto? <Link className='Link' to="/login">Logowanie</Link>
      </div>
  </div>
  
  
  
  
  );
}