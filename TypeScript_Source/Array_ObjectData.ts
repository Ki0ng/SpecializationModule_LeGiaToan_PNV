type Student = {
    name: string,
    score: number,
}

const students: Student[] = [
    { name: 'nam', score: 10 },
    { name: 'truyen', score: 3 },
    { name: 'toan', score: 3 },
]

function allStudents (students: Student[], threshold: number): Student[] {
    return students.filter(students => students.score > threshold);
}

function averageScore (students: Student[]): number {
    const sum = students.reduce((sum, student) => sum + student.score, 0);
    const total = sum/students.length;
    return total;
}

console.log(allStudents(students, 8));
console.log(averageScore(students));

