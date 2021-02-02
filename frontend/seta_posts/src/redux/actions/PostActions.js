import {TYPES} from "../types/PostTypes";
import {getPosts} from "../../api/GETPosts";

const PostActions = {
    getPosts: (page) => {
        return (dispatch) => {
            getPosts((posts) => {
                // callback();
                console.log(page);
                dispatch({
                    type: TYPES.GETPOST,
                    page: page,
                    posts: posts.slice(15*(page-1), 15*page)
                })
            })
        }
    }
}

export {PostActions}