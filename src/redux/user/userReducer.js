import {
    CREATE_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
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
                users: action.payload,
                error: ''
            }

        case CREATE_USER_FAILURE:
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