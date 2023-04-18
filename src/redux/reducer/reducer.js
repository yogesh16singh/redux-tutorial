import { A, B, C, D } from "../constants/constants";


const rootReducer = (state = { value: 0, name: "YOGESH" }, action) => {
    let newstate = state;
    switch (action.type) {
        case A:
            newstate = {
                ...state,
                name: action.name
            }
            break;
        case B:
            newstate = {
                ...state,
                name: action.name
            }
            break;
        case C:
            newstate = {
                ...state,
                name: action.name
            }
            break;
        case D:
            newstate = {
                ...state,
                name: action.name
            }
            break;
        default:
            break;
    }

    return newstate;
}
export default rootReducer;
