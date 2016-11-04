/*
    -Danny Nguyen
    -danny_nguyen1@student.uml.edu
    -University Of Massachusetts Lowell - 96.161 GUI Programming 1
    -Last updated November 3rd, 2016
*/

/*  This calculator.js file implements the actual computation needed for the multiplication table
    by creating the table and populating it dynamically based on the numbers which the user inputs. 
    This code also take into account edge cases such as when the user enters something other than 
    a number where it will have an alert pop up asking for valid inputs. It also tests for the case 
    where the user enters invalid range for number 2 and number 4.
*/

function calculate() {
    $("table").children().remove();
    //creates the place holder for the numbers
    var num1 = Number(document.forms["calculatorForm"]["num1"].value);
    var num2 = Number(document.forms["calculatorForm"]["num2"].value);
    var num3 = Number(document.forms["calculatorForm"]["num3"].value);
    var num4 = Number(document.forms["calculatorForm"]["num4"].value);
    console.log(num1, num2, num3, num4);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("You need to choose a valid number.");
    } else {
        if (num2 <= num1 || num4 <= num3) {
            alert("Number 2 has to be greater than Number 1 AND Number 4 has to be greater than Number 3.");
        } else {
            var table = document.getElementById("timesTable");

            // First row header
            var firstRow = table.insertRow(0);
            // Empty cell
            firstRow.insertCell(0);
            for (var j = 0; j <= (num2 - num1); j++) {
                // Add header titles
                var cell = firstRow.insertCell(j + 1);
                cell.innerHTML = "<p>" + (j + (num1)) + "</p>";
            }
            for (var i = 0; i <= (num4 - num3); i++) {
                var row = table.insertRow(i + 1);
                // Add row title as first cell
                var firstCell = row.insertCell(0);
                firstCell.innerHTML = "<p>" + (i + num3) + "</p>";
                for (var j = 0; j <= (num2 - num1); j++) {
                    var cell = row.insertCell(j + 1);
                    cell.innerHTML = "<p>" + ((num3 + i) * (num1 + j)) + "</p>";
                }
            }
        }
    }
    return false;
}