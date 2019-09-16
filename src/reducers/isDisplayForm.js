import * as types from './../contans/ActionTypes';

var initialState = false; //close form  //trả về giá trị true false

const isDisplayForm = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:  
            return true ;
        case types.CLOSE_FORM:
            return false;
        default:
            return state;
    }
}
export default isDisplayForm;