
import * as types from './../contans/ActionTypes';

var initialState = {
    by: 'name',
    orderDir: 'asc'
};

var sort = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASK:
            return state;

        case types.SORT_SUCCESS:
            return {
                by: action.sort.by,
                orderDir: action.sort.orderDir,
            };
        case types.SORT_FAILURE:
            return state;
        default:
            return state;
    }
};
export default sort;