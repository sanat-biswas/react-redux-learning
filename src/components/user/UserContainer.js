import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux';
import AddUser from './AddUser';

function UserContainer() {

    const users = useSelector(state => state.user)
    const dispatch = useDispatch();

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
                            <h2>users.error</h2>
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
                                        users && users.users && users.users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td><button className='btn btn-primary'>Edit</button></td>
                                                <td><button className='btn btn-danger'>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default UserContainer;