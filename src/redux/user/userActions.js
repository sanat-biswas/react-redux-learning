import axios from "axios";
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

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