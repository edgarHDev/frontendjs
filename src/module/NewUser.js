import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function NewUser({show, handleClose, formData, onChange, onSubmit}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>Nuevo usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        name='name'
                        value={formData.name}
                        onChange={(e) => onChange(e)}
                        type="text" placeholder="Nombre" />
                    
                    </Form.Group>

                    <Form.Group controlId="lastanme">
                        <Form.Label>Apellido paterno</Form.Label>
                        <Form.Control  
                        name='lastname'
                        value={formData.lastname}
                        onChange={(e) => onChange(e)}
                        placeholder="Apellido paterno" />
                    </Form.Group>

                    <Form.Group controlId="surname">
                        <Form.Label>Apellido materno</Form.Label>
                        <Form.Control 
                        name='surname'
                        value={formData.surname}
                        onChange={(e) => onChange(e)}
                        placeholder="Apellido materno" />
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control 
                            name='age'
                            value={formData.age}
                            onChange={(e) => onChange(e)} 
                            type="number"
                            placeholder="Edad" />
                    </Form.Group>
                    
                    <Form.Group controlId="email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control 
                        name='email'
                        value={formData.email}
                        onChange={(e) => onChange(e)}
                        type="email" placeholder="Correo Electrónico" />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control 
                        name='phone'
                        value={formData.phone}
                        onChange={(e) => onChange(e)}
                        type="text" placeholder="Telefono" />
                    </Form.Group>
                    <Button className='m-3' variant="primary" type="button" onClick={() => onSubmit()}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        
        </Modal>
    )
}
