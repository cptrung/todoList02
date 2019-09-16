import * as types from '../contans/ActionTypes';
//import dataItem from '../dataItem';
import _ from "lodash";
import randomstring from 'randomstring';
//index chính của reducer , 

//data
var initialState = [];

// check find name
var findIndex = (data, id) => {
    var index = -1;
    data.forEach((item, i) => {
        if (item.id === id) {
            index = i;
        }
    })
    return index;
}

var tasks = (state = initialState, action) => {
    switch (action.type) {
        // all list 
        case types.LIST_REQUEST:
            return [];
        case types.LIST_SUCCESS:
            //console.log(action);
            return action.data;
        case types.LIST_FAILURE:
            return [];

        //add task 
        case types.ADD_TASK:
            return [...state];
        case types.ADD_TASK_SUCCESS:
            console.log(action); // trỏ đến dữ liệu khi add
            var newTask = {
                id: action.data.id,
                // do action lúc đầu khai báo data nên action.data.name
                name: action.data.name,
                email: action.data.email,
                level: action.data.level,
            };
            console.log(state);
            // if (!newTask.id) {
            //nếu không có id 
            newTask.id = randomstring.generate();
            state.push(newTask);
            // }
            // else {
            //     //edit
            //     var index = findIndex(state, newTask.id);
            //     state[index] = newTask;
            // }
            // //push  vào task mới  .
            // //state.push(newItem);
            // //lưu lên localStorage ,..
            // //lúc khai báo state thì ra object , ép kiểu string thì ép lại JSON.stringify(state) 
            //localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.ADD_TASK_FAILURE:
            return [...state];

        // update task ->edit task 
        case types.UPDATE_TASK:
            return [...state];
        case types.UPDATE_TASK_SUCCESS:
            //console.log(action);
        //c1
            // var index = findIndex(state , action.task.id);
            var index = _.findIndex(state,
                task => {
                    return task.id === action.task.id;
                });
            //console.log(index);
            return [
                // ...state.slice(0, index),
                // ...state.slice(index + 1),
                ...state.slice(0, index),
                {
                    ...action.task,
                    id: action.task.id,
                    name: action.task.name,
                    email: action.task.email,
                    level: action.task.level
                },
                ...state.slice(index + 1),
            ];
        //c2
            // var newTaskEdit = {
            //     id: action.task.id,
            //     //action :khai báo task nên action.task.name
            //     name: action.task.name,
            //     email: action.task.email,
            //     level: action.task.level,
            // };
            // var index = findIndex(state, newTaskEdit.id);
            // state[index] = newTaskEdit;
            // return [...state]
        case types.UPDATE_TASK_FAILURE:
            return [...state];

        //delete item   
        case types.DELETE_TASK:
            return [...state];
        case types.DELETE_TASK_SUCCESS:
            var id = action.id;
            //console.log(action.id);
            index = findIndex(state, id);
            localStorage.setItem('task', JSON.stringify(state));
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),
            ];
        case types.DELETE_TASK_FAILURE:
            return [...state];

        default:
            return state;
    }
}
export default tasks;