class StudentServices{

    static filterByid(students, id){
        const StudentByid = students.filter((student) => student.id == id);
        return StudentByid;
    }

    static filterbyname(students,name){
        
        const studentbyname =students.filter((student) => student.name == name);
        const namestudent = studentbyname.map((student) => student.name);
        return namestudent;
    }

    static filtercertificationtrue (students,certificado){
        const studentswithcertication = students.filter((student) => student.haveCertification == certificado);
        const newcertification = studentswithcertication.map((student)=> student.email);
        return newcertification;
    }
    
    
    static filtercredits(students)
    {
        if(students.credits >= 500){
            return students;
        }
          
        else{
            return students;
        }
    }



}
module.exports = StudentServices;