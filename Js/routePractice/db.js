

const students =[
{ id: 1, name:" Jame", score: 20},
{id: 2, name : "victor", score: 10},
{id: 3, name:"Jana", score: 30}
]


async function getStudentById(studentId) {
    return students.find(students => students.id == studentId)
}

module.exports = {getStudentById};