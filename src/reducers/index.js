import { combineReducers } from 'redux';
import data from './data';

// tạo hàm combineReducers 
const myReducer = combineReducers({
    // viết tắt  data
    //thằng data dc gọi trong TaskList.js .của hàm mapStatetoProp :  
    data: data,
});

export default myReducer;
