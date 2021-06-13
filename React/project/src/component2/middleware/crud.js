import actions from "../../component/actions"

export const getAllEmployees=({dispatch,getState})=>next=>action=>{
   
    if(action.type==='SET_EMPLOYEES'){

        fetch('http://localhost:9000/getAllEmployed', {
            method: 'GET',
        }).then((response) => {
                return response.json()
            }).then((result)=>{
               dispatch(actions.setEmployees(result.employees))
            }).catch((error)=>{
                console.log(error);
            })
    }
    return next(action);
}


export const addNewEmployee=({dispatch,getState})=>next=>action=>{
    if(action.type==='ADD_EMPLOYEE'){
     fetch('http://localhost:9000/setNewEmployed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload)
    }).then(function (response) {
            return response.json()
        }).then(function (result) {
             dispatch(actions.addEmployee(result.employee))
        }).catch((error)=>{
            console.log(error);
        });
    }
        return next(action);
}