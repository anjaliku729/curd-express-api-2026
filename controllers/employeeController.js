const Employee = require("../models/employee");

//Get all employees
const getallEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//create employee
const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        if (!name || !email || !phone || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const isExist = await Employee.findOne({ email });
        if (isExist) {
            return res.status(400).json({ message: "Employee already exists" });
        }

        const employee = await Employee.create({ name, email, phone, address });
        res.status(201).json({
            success: true,
            message: "Employee created successfully",
            data: employee
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//view employee
const viewEmployees = async (req, res) => {
    try {
        const employees = await Employee.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//update employee
const updateEmployees = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const employees = await Employee.findByIdAndUpdate(req.params.id,{
            name,
            email,
            phone,
            address
        });
        res.status(200).json({
            success: true,
            message: "Employees update successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//delete employee
const deleteEmployees = async (req, res) => {
    try {
        
        const employees = await Employee.findByIdAndDelete(req.params.id)
           
        res.status(200).json({
            success: true,
            message: "Employees delete successfully",
            data: employees
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getallEmployees,
    createEmployee,
    viewEmployees,
    updateEmployees,
    deleteEmployees
}