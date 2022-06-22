import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchUsers } from '../../redux';
import AddUser from './AddUser';
import {Button} from 'react-bootstrap';
import EditUser from './EditUser';

function UserContainer() {

    const users = useSelector(state => state.user)

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [user, setUser] = useState();

    const handleUpdateUser = (user) => {
        setUser(user);
        setShow(true);
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-8 offset-2'>

                    <h1 className='text-success'>UserContainer</h1>
                    <AddUser />
                    {
                        users.loading ? (
                            <h2>loading</h2>
                        ) : users.error ? (
                            <h2>{users.error}</h2>
                        ) : (
                            <table className='table table-responsive'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users && users.users && users.users.sort((user1, user2) => user1.id - user2.id).map((user) => (
                                            
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Button variant="primary" onClick={() => handleUpdateUser(user)} >
                                                    Edit User
                                                    </Button>
                                                </td>
                                                <td><Button variant='danger' onClick={() => dispatch(deleteUser(user.id))}>Delete</Button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>

            </div>
                <EditUser handleEdit={show} handleClose={handleClose} updateUser={user} setUser={setUser}/>
        </div>
    )
}

export default UserContainer;