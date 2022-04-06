import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Hasła się różnią")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {     //Sprawdź, czy nowy email, nie jest identyczny z aktualnym
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {                        //Sprawdź czy hasło nie jest identyczne z aktualnym
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate('/profile')
      })
      .catch(() => {
        setError("Nie udało się uaktualnić profilu")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="update">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Zaktualizuj Profil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Pozostaw puste, by nie zmieniać"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Powtórz Hasło</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Pozostaw puste, by nie zmieniać"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Zaktualizuj
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link className='Link' to="/profile">Wróć</Link>
      </div>
    </div>
  )
}