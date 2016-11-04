function calculate() {
    $("table").children().remove();
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
            
            var firstRow = table.insertRow(0); // First row header
            firstRow.insertCell(0); // Empty cell
            for (var j = 0; j <= (num2 - num1); j++) {
                var cell = firstRow.insertCell(j + 1); // Add header titles
                cell.innerHTML ="<p>" + (j + (num1)) + "</p>";
            }

            for (var i = 0; i <= (num4 - num3); i++) {
                var row = table.insertRow(i + 1);
                var firstCell = row.insertCell(0); // Add row title as first cell
                firstCell.innerHTML ="<p>" + (i + num3) + "</p>";
                for (var j = 0; j <= (num2 - num1); j++) {
                    var cell = row.insertCell(j + 1);
                    cell.innerHTML ="<p>" + ((num3 + i) * (num1+j)) + "</p>";
                }
            }
        }
    }
    return false;
}