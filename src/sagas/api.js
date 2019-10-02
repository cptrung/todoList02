import axios from 'axios' ;
//const url = "http://5d7b46f3bc283e0014c2dc0c.mockapi.io/api/todolist" ;
const url = "http://localhost:3000/todolist" ;

function fetchTodoList(){
    return axios ({
        method : "GET" ,
        url 
    })
}

//add task  
// use data : newTask 
function addNewTaskAPI(newTask) {
    return axios({
        method: "POST",
        url,
        data:newTask
    });
} 

//delete task 
function deleteTaskAPI(param) {
    return axios ({
        method : "DELETE",
        url: `${url}/${param}` ,
        data :null ,
    })
}

//update task 
function updateTaskAPI(task){
    return axios ({
        method : "PUT",
        url :`${url}/${task.id}`,
        data :task
    });
}

export const api = {
    fetchTodoList ,
    deleteTaskAPI,
    addNewTaskAPI,
    updateTaskAPI,
}