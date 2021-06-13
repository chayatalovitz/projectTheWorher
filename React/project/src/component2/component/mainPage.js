import { setAutoFreeze } from "immer"
import { useEffect } from "react"
import { connect } from "react-redux"
import DisplayOneEmployee from './DisplayOneEmployee'
import actions from '../../component/actions'

function MainPage(props) {

    useEffect(() => {
        props.getAllEmployees()
    }, [])

    const renderTask = () => {
        return props.allEmployees && props.allEmployees.map((employee, index) => {
            return <DisplayOneEmployee indexEmployee={index} employee={employee}></DisplayOneEmployee>
        })
    }
   
    return (
        <>
            {renderTask()}
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        allEmployees: state.employees.employees
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getAllEmployees: () => dispatch(actions.setEmployees())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)