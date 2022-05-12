const express = require("express");
const studentcontroller = require("./controllers/studentcontroller");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Think API welcome!"});
});


app.get("/v1/students/", (request, response) => {
    const AllStudents = studentcontroller.allstudentscontroller();
    response.json(AllStudents);
});

app.get("/v1/studentscertificate", (request, response) => {
    const students= studentcontroller.getcertificationtrue(true);
    response.json(students);
});

app.get("/v1/studentscredit/", (request, response) => { 
    const students= studentcontroller.filtercredit(501);
    response.json(students);
});


app.listen(port, () => {
    console.log(`Visual Think API in localhost:${port}`);
});