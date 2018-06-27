import {FETCH_WEATHER} from "../actions";


export default function (state = [], action) {
    console.log("ACTION RECIEVED", action);
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            break;
    }


    return state;
}