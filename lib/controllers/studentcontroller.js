const studentservice = require("../services/studentservices");
const Reader = require("./../../lib/utils/reader");

class studentcontroller{

    static allstudentscontroller(){
        const allstudent = Reader.readJsonFile("visualpartners.json");
        return allstudent;
    }


    static getstudentByid(id){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentservice.filterByid(students, id);
    }

    static getstudentByname(name){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentservice.filterbyname(students, name);
    }

    static getcertificationtrue(certificate){
        const students = Reader.readJsonFile("visualpartners.json");
        return studentservice.filtercertificationtrue(students,certificate);
    }
    
    static filtercredit(credito){
        const students = Reader.readJsonFile("visualpartners.json");
        const creditstudents= students.filter((student) => student.credits > credito);
        const listacredit = creditstudents.map((student)=> student.name);
        return studentservice.filtercredits(listacredit);
    }


}
module.exports =studentcontroller;