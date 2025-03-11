const db= require("../db")
async function getStudentById(req, res) {
    const {studentId} =req.params;
    const student = await db.getStudentById(Number(studentId))
    if(!student){
        res.status(404).send("Erorr")
        res.end()
    }
    else{
        res.json({
            student: `${student}`
        })
    }

   
}

module.exports = getStudentById