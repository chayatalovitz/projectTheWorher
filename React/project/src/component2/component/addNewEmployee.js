import React, { useRef } from "react"
import { connect } from 'react-redux'
import actions from '../../component/actions'
// import {createContext} from 'react';

function CreateEmployee(props) {
    const refFirstNameEmployee = useRef('')
    const refLastNameEmployee = useRef('')
    const refEmployeeEmail = useRef('')
    const refEmployeePassword = useRef('')
    const refEmployeeStatus = useRef(0)
   
    const addNewEmployee = () => {
        props.createNewEmployee({
             firstName: refFirstNameEmployee.current.value,
             lastName: refLastNameEmployee.current.value,
             email: refEmployeeEmail.current.value,
             password: refEmployeePassword.current.value,
            status:0
             })
        refFirstNameEmployee.current.value=''
        refLastNameEmployee.current.value=''
        refEmployeeEmail.current.value=''
        refEmployeePassword.current.value=''
    }
    return (
        <>
         {props.isAdmin?
         <div>
            <label>firstName:</label>
            <input ref={refFirstNameEmployee}></input>
            <label>lastName:</label>
            <input ref={refLastNameEmployee}></input>
            <label>email:</label>
            <input ref={refEmployeeEmail}></input>
            <label>password:</label>
            <input ref={refEmployeePassword}></input>
            <button onClick={addNewEmployee}>add employee</button>
            </div>
            :
            <div>you dont an admin</div>
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isAdmin:state.employees.isAdmin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createNewEmployee: (employee) => dispatch(actions.addEmployee(employee))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)


