import { TYPES } from "../types/PostTypes";

export const rootReducer = (state = {
    page: 1,
    posts: []
}, action) => {
    switch (action.type) {
        case TYPES.GETPOST: {
            return {
                ...state,
                page: action.page,
                posts: action.posts
            }
        }
        default: {
            return state;
        }
    }
}