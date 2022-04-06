// w zasadzie, tak jak w przypadku pozostałych stron, jest to w większości kopiuj/wklej
// ze stron login czy signup

import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Sprawdź skrzynkę mailową")
    } catch {
      setError("Nie udało się zresetować hasła")
    }

    setLoading(false)
  }

  return (
    <div className="password">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Resetowanie Hasła</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Resetuj hasło
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link className="Link" to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Potrzebujesz konto? <Link className="Link" to="/sign-up">Zarejestruj się</Link>
      </div>
    </div>
  )
}