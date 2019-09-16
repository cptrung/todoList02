import * as types from './../contans/ActionTypes';
//import sort from '../reducers/sort';

// all list 
export const listRequest = () => {
  return {
    type: types.LIST_REQUEST,
  };
};

export const listSuccess = data => {
  return {
    type: types.LIST_SUCCESS,
    data
  };
};
export const listFail = error => {
  return {
    type: types.LIST_FAILURE,
    error
  };
};

//add 
export const AddTaskRequest = (task) => {
  return {
    type: types.ADD_TASK,
    task
  };
};
export const AddTaskSuccess = (data) => {
  return {
    type: types.ADD_TASK_SUCCESS,
    data
  };
};
export const AddTaskFail = (error) => {
  return {
    type: types.ADD_TASK_FAILURE,
    error
  }
}

//toggleForm
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}

//open From 
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
}

//close form 
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

//delete 
export const DeleteTaskRequest = id => {
  return {
    type: types.DELETE_TASK,
    id
  };
};
export const DeleteTaskSuccess = id => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    id
  };
};
export const DeleteTaskFail = error => {
  return {
    type: types.DELETE_TASK_FAILURE,
    error
  };
};

// task editing 
export const TaskEditingRequest = (task) => {
  return {
    type: types.TAKS_EDITING,
    task
  };
};
export const TaskEditingSuccess = (task) => {
  return {
    type: types.TAKS_EDITING_SUCCESS,
    task
  };
};
export const TaskEditingFail = (error) => {
  return {
    type: types.TAKS_EDITING_FAILURE,
    error
  };
};

// edit task
export const UpdateTaskRequest = task => {
  return {
    type: types.UPDATE_TASK,
    task
  };
};
export const UpdateTaskSuccess = task => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    task
  };
};
export const UpdateTaskFail = error => {
  return {
    type: types.UPDATE_TASK_FAILURE,
    error
  };
};

// search 
export const SearchTask = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword: keyword
  }
}
export const SearchSuccess = (keyword) => {
  return {
    type: types.SEARCH_SUCCESS,
    keyword: keyword
  }
}
export const SearchFail = () => {
  return {
    type: types.SEARCH_FAILURE,
  }
}

//sort 
export const SortTask = (sort) => {
  return {
    type: types.SORT_TASK,
    sort: sort,
  }
}
export const SortTastSuccess = (sort) => {
  return {
    type: types.SEARCH_SUCCESS,
    sort: sort,
  }
}
export const SorrTaskFail = (sort) => {
  return {
    type: types.SEARCH_FAILURE,
    error: 'err'
  }
}