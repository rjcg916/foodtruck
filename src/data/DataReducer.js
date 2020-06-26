import { ActionTypes } from './Types';

export const DataReducer = (theData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD :
            return {...theData, 
            [action.payload.dataType] : action.payload.data};
        default:
            return theData || {};
    }
}