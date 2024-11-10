const express = require('express'); // Express module ko import kar rahe hain
const app = express(); // Express application ko initialize kar rahe hain
const port = 3000; // Server ka port define kar rahe hain

// Middleware to parse incoming JSON data
app.use(express.json()); // Body ko JSON format mein parse karne ke liye
app.use(express.urlencoded({ extended: true })); // Form data ko bhi handle karne ke liye

// In-memory array to store employees (temporary database)
let employees = [];

// POST route to create a new employee
app.post('/employees', (req, res) => {
    const { name, id, department, salary } = req.body; // Employee details ko request body se extract kar rahe hain

    // Manual Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            status: 'error',
            message: 'Employee name is required and should be a non-empty string'
        });
    }

    if (!id || isNaN(id)) {
        return res.status(400).json({
            status: 'error',
            message: 'Employee ID is required and should be a number'
        });
    }

    if (!department || typeof department !== 'string' || department.trim() === '') {
        return res.status(400).json({
            status: 'error',
            message: 'Department is required and should be a non-empty string'
        });
    }

    if (!salary || isNaN(salary) || salary <= 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Salary is required and should be a positive number'
        });
    }

    // Create a new employee object
    const newEmployee = { id, name, department, salary };
    employees.push(newEmployee); // New employee ko array mein add kar rahe hain

    // Success response with created employee details
    return res.status(201).json({
        status: 'success',
        message: 'Employee created successfully',
        data: newEmployee // Created employee ki details
    });
});

// PUT route to update an existing employee by ID
app.put('/employees/:id', (req, res) => {
    const { id } = req.params; // Employee ID ko URL parameter se le rahe hain
    const { name, department, salary } = req.body; // New details ko request body se extract kar rahe hain

    // Finding the employee with the given ID
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(id));

    // Agar employee nahi mila
    if (employeeIndex === -1) {
        return res.status(404).json({
            status: 'error',
            message: `Employee with ID ${id} not found`
        });
    }

    // Update the employee data
    if (name) employees[employeeIndex].name = name;
    if (department) employees[employeeIndex].department = department;
    if (salary) employees[employeeIndex].salary = salary;

    // Success response with updated employee details
    return res.status(200).json({
        status: 'success',
        message: 'Employee updated successfully',
        data: employees[employeeIndex] // Updated employee ki details
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});