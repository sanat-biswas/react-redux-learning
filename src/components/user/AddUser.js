import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { createUser } from '../../redux';


function AddUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const users = useSelector(state => state.user)
    const dispatch = useDispatch();

    const [user, setUser] = useState();

     const handleSubmit = () => {
        dispatch(createUser(user));
    }

    return (
        <>
            <Button variant="primary" className="float-right" onClick={handleShow}>
                Add User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="John Doe..."
                                autoFocus
                                onChange={(e) => setUser({
                                    ...user,
                                    name: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="johndoe@example.com"
                                autoFocus
                                onChange={(e) => setUser({
                                    ...user,
                                    email: e.target.value
                                })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="*******************"
                                autoFocus
                                onChange={(e) => setUser({
                                    ...user,
                                    password: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddUser;