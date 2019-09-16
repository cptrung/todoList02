import * as types from '../contans/ActionTypes';

var initialState = {
    id: '',
    name: '',
    email: '',
    level: 'medium',
};   //note : muốn editting trả về giá trị rỗng trước đã , nếu  mà ghi dataItem trả về giá trị data của hắn  
// lỗi đỏ khi tắt intitial

const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        // case types.EDIT_TASK:
        //     //console.log(action.item);
        //     return { ...action.item };

        case types.TAKS_EDITING:
            return { ...state };

        case types.TAKS_EDITING_SUCCESS:
            //console.log(action);
            return action.task ;

        case types.TAKS_EDITING_FAILURE:
            return { ...state };

        default:
            return state;
    }
}
export default itemEditing;