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

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        case CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_USER_SUCCESS:
            return {
                loading: false,
                users: [...state.users, action.payload],
                error: ''
            }

        case CREATE_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case UPDATE_USER_SUCCESS:
            return {
                loading: false,
                users: [...state.users.filter(user => user.id !== action.payload.id), action.payload],
                error: null
            }
        case UPDATE_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_USER_SUCCESS:
            return {
                loading: false,
                users: [...state.users.filter((user) => user.id !== action.payload)],
                error: null
            }

        case DELETE_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }


        default:
            return state;
    }
}

export default reducer