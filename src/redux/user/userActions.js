import axios from "axios";
import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "./userTypes";

//for fetching the users from the database
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

//for creating the new user to the database
export const createUsersRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUsersSuccess = (user) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: user
    }
}

export const createUserFailure = (error) => {
    return {
        type: CREATE_USER_FAILURE,
        payload: error
    }
}

//for updating the users
export const updateUserRequest = () => {
    return {
        type: UPDATE_USER_REQUEST
    }
}

export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: user
    }
}

export const updateUserFailure = (error) => {
    return {
        type: UPDATE_USER_FAILURE,
        payload: error
    }
}

export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    }
}

export const deleteUserSuccess = (user) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: user
    }
}

export const deleteUserFailure = (error) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: error
    }
}


//for fetching the user information
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('http://localhost:8000/api/users').then(response => {
            const users = response.data.users;
            dispatch(fetchUsersSuccess(users));
        }).catch(error => {
            const err = error.message;
            dispatch(fetchUsersFailure(err));
        })
    }
}

//for creating new users
export const createUser = (user) => {

    return (dispatch) => {
        dispatch(createUsersRequest());
        axios.post('http://localhost:8000/api/users', user).then(response => {
            console.log("users", response);
            dispatch(createUsersSuccess(user));
        }).catch(error => {
            console.log("error", error);
            dispatch(createUserFailure(error));
        })
    }
}

//for updating the user data
export const updateUsers = (user) => {

    return (dispatch) => {
        dispatch(updateUserRequest());

        axios.put('http://localhost:8000/api/users/' + user.id, user)
            .then(response => {
                dispatch(updateUserSuccess(user));
            }).catch(error => {
                dispatch(updateUserFailure(error));
            })
    }
}

export const deleteUser = (index) => {
    return (dispatch) => {
        dispatch(deleteUserRequest)
        axios.delete('http://localhost:8000/api/users/'+index).then(response => {

        console.log("response", response);
            dispatch(deleteUserSuccess(index));
        }).catch(error => {
            dispatch(deleteUserFailure(error));
        })
    }
}