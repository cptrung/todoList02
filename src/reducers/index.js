import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import search  from './search';
import sort from './sort';

// tạo hàm combineReducers 
const myReducer = combineReducers({
    //có thể viết tắt  tasks  
    ///thằng tasks dc gọi trong TaskList.js .của hàm mapStatetoProp :  
    tasks: tasks,
    isDisplayForm: isDisplayForm,
    itemEditing: itemEditing,
    search :search , 
    sort : sort ,
});

export default myReducer;
