import produce from 'immer'
import createReducer from '../../component/reducerUtils'

const initialState = {
    employees: [
    ],
    Admin:{email:'admin@worker.com',password:'admin2765'},
    isAdmin:false
}

const employeeFunction = {
   
    addEmployee(state, action) {
     if (action.payload)
       state.employees.push(action.payload)
    },
    
    setEmployees(state, action) {
        state.employees = action.payload
    },
    Log(state, action){
        state.admin.email==action.payload.email&&
        state.admin.password==action.payload.password?state.isAdmin=true:state.isAdmin=false
    }


}
const reducer = produce((state, action) => {
    createReducer(state, action, employeeFunction)
}, initialState)
export default reducer

