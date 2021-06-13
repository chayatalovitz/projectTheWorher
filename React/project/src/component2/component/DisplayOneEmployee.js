import { setAutoFreeze } from "immer"
import { useRef, useState } from "react"
import { connect } from "react-redux"
// import DeleteTask from "./deleteTask"
// import UpdateTask from './updateTask'

 function DisplayOneEmployee(props){

    const refIfChangeToMuasak=useRef(false)
    const [statusDisplay,setStatusDisplay]=useState('')
    return(
        <>
        <div>
            name:{props.employee.firstName+" "+props.employee.lastName+" "}
           {(!props.employee.status)?setStatusDisplay('muamad'):setStatusDisplay('muasak')}
            status:{statusDisplay}
            {props.isAdmin?
            <select ref={refIfChangeToMuasak}>
                <option selected disable>select</option>
                <option>select</option>
                <option>muamad</option>
                <option>muasak</option>
            </select>:""}
        </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        isAdmin:state.employees.isAdmin
    }
}
export default connect(mapStateToProps)(DisplayOneEmployee)