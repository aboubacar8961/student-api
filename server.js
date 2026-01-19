import Express from 'express';
import StudentRouter from './router/students.js';

const app = Express();
const PORT = 5000;
app.use(Express.json());
app.use(StudentRouter);


app.listen(PORT,(req, res)=>{
    console.log(`Server is Listening ${PORT}`)
    });
