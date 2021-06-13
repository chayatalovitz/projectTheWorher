const Employee = require('../model/emploee')
const jwt = require('jsonwebtoken')

const createNewEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body)
        await employee.save()
        res.json({ employee })

    }
    catch (err) {
        res.json({ err })
    }
}
const getEmployee = async (req, res) => {
    try {
       const employees=await Employee.find()
        res.json({ employees })

    }
    catch (err) {
        res.json({ err })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Task.findByIdAndDelete(req.params.id)
        res.json({deletedEmployee})
    }
    catch (err) {
        res.json({ err })
    }
}
const deleteTask = async (req, res) => {
        try {
            // const deletedTaskId = req.params.id
            const tasks = await Employee.find()
            tasks.map(async(task)=>{
                await Employee.findByIdAndDelete(task._id)})
           
        }
        catch (err) {
            res.json({ err })
        }
    }
// const checkPermission = async (req, res, next) => {
//     try{
//     const currentAdmin = await jwt.verify(req.headers.token, process.env.SECRET)
//     console.log(currentAdmin)
//     await Admin.find({email: currentAdmin.email, name: currentAdmin.name })
//    }
//    catch(error){
//     res.json({ status: 400, message: "No permisstion! please register as real admin" })
//    }
//    next()
// }

const enterPermissionEmployee= async (req, res) => {
    const token = jwt.sign({ password: req.params.password, name: req.params.name }, process.env.SECRET)
    console.log('token ' + token)
    res.status(200).json({ token: token })
}

    module.exports = { createNewEmployee,getEmployee,deleteEmployee,enterPermissionEmployee,deleteTask}