import { Router } from "express";
import studentsDB from '../St.Folder/studentsDB.js';

const StudentRouter = Router();

StudentRouter.get('/api/students', (req, res) => {
    console.log("Request Query: ",req.query);
    res.send(studentsDB);
});

StudentRouter.get('/api/students/:id', (req, res) => {
    const student = studentsDB.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send(' not found');
    res.send(student);
});

StudentRouter.post('/api/students', (req, res) => {
    const newStudent = {
        id: studentsDB.length + 1,
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    };
    studentsDB.push(newStudent);
    res.status(201).send(studentsDB);
});

StudentRouter.delete('/api/students/:id', (req, res) => {
    const studentIndex = studentsDB.findIndex(s => s.id === parseInt(req.params.id, 10));

    if (studentIndex === -1) return res.status(404).send('Student not found...');
    studentsDB.splice(studentIndex, 1);
    res.send(studentsDB);
});

StudentRouter.put('/api/students/:id', (req, res) => {
    const student = studentsDB.find(s => s.id === parseInt(req.params.id, 10));
    if (!student) return res.status(404).send('Student not found...');

    const updatedStudent = {
        id: student.id,
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    };

    const studentIndex = studentsDB.findIndex(s => s.id === parseInt(req.params.id, 10));
    studentsDB[studentIndex] = updatedStudent;
    res.send(studentsDB);
});

export default StudentRouter;