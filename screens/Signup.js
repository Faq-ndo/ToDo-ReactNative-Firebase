import React, { useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordConfirmRef.current.value !== passwordConfirmRef.current.value) {
            setError('La contraseña no coincide');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
             setError('ERROR: En la creación de la cuenta');
        }
        setLoading(false)
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Crear cuenta</h2>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" ref={emailRef}  required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" ref={passwordRef}  required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef}  required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100"  type="submit">Crear</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}