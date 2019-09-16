import * as types from './../contans/ActionTypes';

var initialState = ''; // search dùng keyword kiểu string nên dùng : ''  .

const search = (state = initialState, action) => {
    switch (action.type) {

        // console.log(state); //state ban đầu là rỗng
        // console.log(action); // sau khi bấm keyword thì hiển ra . 
        case types.SEARCH_TASK:
            return state;
        case types.SEARCH_SUCCESS:
            return action.keyword;
        case types.SEARCH_FAILURE:
            return state;
        default:
            return state;
    }
}
export default search;