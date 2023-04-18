import { createStore } from "redux";
import rootReducer from "../reducer/reducer";

let store = createStore(rootReducer);

export default store;