const router=require('express').Router()
 const employeeFunction = require('./controller/emploee')

router.post('/setNewEmployed',employeeFunction.createNewEmployee)
router.get('/getAllEmployed',employeeFunction.getEmployee)
router.post('/enterPermissionEmployee/:password/:name',employeeFunction.enterPermissionEmployee)
// router.delete('/deleteTask/:id',taskFunction.deleteTask)
router.delete('/deleteTask',employeeFunction.deleteTask)

module.exports=router
