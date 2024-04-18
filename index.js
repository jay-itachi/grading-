// Function to input grades for each subject

document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get all input elements with class "subject"
    var inputs = document.querySelectorAll(".subject");

    // Calculate total grade and count valid inputs
    var total = 0;
    var count = 0;
    for (var i = 0; i < inputs.length; i++) {
        var grade = parseFloat(inputs[i].value);
        if (!isNaN(grade) && grade >= 0 && grade <= 100) {
            total += grade;
            count++;
        }
    }

    // Calculate average grade
    var averageGrade = total / count;
    let letterGrade;
    if (averageGrade >= 90) {
        letterGrade = 'A';   
    } else if (averageGrade >= 80) {
        letterGrade = 'B'
    } else if (averageGrade >= 60) {
        letterGrade = 'C'
    } else if (averageGrade >= 40) {
        letterGrade = 'D'
    }

    // Display the result
    var resultDiv = document.getElementById("result");
    if (!isNaN(averageGrade)) {
        resultDiv.textContent = "Average grade: " + averageGrade.toFixed(2) + letterGrade;
    } else {
        resultDiv.textContent = "Invalid input! Please enter grades between 0 and 100.";
    }
  
});  

