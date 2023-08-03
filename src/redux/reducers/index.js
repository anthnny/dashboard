import { combineReducers } from "redux";
import categories  from "./categories";
import remedies  from "./blog";
import auth from "./auth";

export default combineReducers({
    categories,
    remedies,
    auth,
})