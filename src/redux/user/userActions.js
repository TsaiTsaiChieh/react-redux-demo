import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = () => {
    return {
        type: FETCH_USERS_SUCCESS
    }
}

export const fetchUsersFailure = () => {
    return {
        type: FETCH_USERS_FAILURE
    }
}