import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { updateUsers } from '../../redux';

function EditUser(props) {

    console.log("props", props.updateUser);
    const dispatch = useDispatch()

    // const [user, setUser] = useState();

    
    const handleUpdate = () => {
        dispatch(updateUsers(props.updateUser))
    }

    return (
        <>
            <Modal show={props.handleEdit} onHide={props.handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Edit User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="John Doe"
                                defaultValue={props?.updateUser?.name}
                                onChange={(e) => props.setUser({
                                    ...props.updateUser,
                                    name: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={props?.updateUser?.email}
                                placeholder="name@example.com"
                                onChange={(e) => props.setUser({
                                    ...props.updateUser,
                                    email: e.target.value
                                })}
                            />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditUser;