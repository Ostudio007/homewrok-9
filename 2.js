const students = [
  { id: 1, name: 'Alice', grade: 85 },
  { id: 2, name: 'Bob', grade: 75 },
  { id: 3, name: 'Charlie', grade: 95 },
  { id: 4, name: 'David', grade: 60 }
];

// a) ดึงเฉพาะชื่อ
const studentNames = students.map(s => s.name);
console.log("Names:", studentNames);

// b) นักเรียนที่ผ่าน (>= 70)
const passedStudents = students.filter(s => s.grade >= 70);
console.log("Passed:", passedStudents);

// c) เกรดเฉลี่ย
const averageGrade =
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;

console.log("Average grade:", averageGrade);
