import axios from "axios";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

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