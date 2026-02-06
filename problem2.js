function analyzeMarks(marksObj){
let total=0;
for(let mark in marksObj ){

    total+=marksObj[mark];
}
console.log(total);
}

const marks={ math: 78, english: 65, physics: 88, bangla: 55 };
const markAnalyz=analyzeMarks(marks);