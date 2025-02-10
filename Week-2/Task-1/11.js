Write a function that assigns grades based on marks using nested if-else.
		
Marks >= 90 → Grade A  
Marks >= 80 → Grade B  
Marks >= 70 → Grade C  
Marks >= 60 → Grade D  
Else → Fail  


Code.
  
function assignGrade(marks) {
    if (marks >= 90) {
        return "Grade A";
    } else if (marks >= 80) {
        return "Grade B";
    } else if (marks >= 70) {
        return "Grade C";
    } else if (marks >= 60) {
        return "Grade D";
    } else {
        return "Fail";
    }
}

let studentMarks = 85;
console.log("Marks:", studentMarks, "→", assignGrade(studentMarks));
