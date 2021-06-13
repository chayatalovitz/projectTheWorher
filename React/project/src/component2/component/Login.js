import React, { useEffect, useRef, useState } from "react"
import { connect } from 'react-redux'
import actions from './actions'

function Login(props) {
   
    const LoginIn=()=>{
        props.LogIn({email:refMail.current.value,password:refPassword.current.value})
    }
        return (
            <>
            mail:<input ref={refMail}></input><br/>
            password:<input ref={refPassword}></input><br/>
            <button onClick={LoginIn}></button>
            </>
        )
    }
const mapDispatchToProps = (dispatch) => {
    return {
        
        LogIn:(details) => dispatch(actions.Log(details))
    }
}
export default connect(undefined, mapDispatchToProps)(Login);

