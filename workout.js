
let selectedRow= null;
let dateOfExercise = document.getElementById("date-of-exercise");
let typeOfExercise = document.getElementById("type-of-exercise");
let duration= document.getElementById("duration");
let reps = document.getElementById("reps");

// function to determine if data is new information or data is from edit info previously submitted
function submittingNewExercise(){
    event.preventDefault();
    let showData = showFormData();
    // insertNewExercise(showData);
    if(selectedRow === null) {
        insertNewExercise(showData);
    }
    else{
        updateExercise(showData);
    }
    recallData();
}


// getting the data that was entered
function showFormData() {
    let showData = [];
    showData["dateOfExercise"] = document.getElementById("date-of-exercise").value;
    showData["typeOfExercise"] = document.getElementById("type-of-exercise").value;
    showData["duration"] = document.getElementById("duration").value;
    showData["reps"] = document.getElementById("reps").value;
    return showData;
}

// putting the data into the fields
function insertNewExercise(info) {
    let table = document.getElementById("workout-list").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = info.dateOfExercise;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = info.typeOfExercise;
    let cell3 = newRow.insertCell(2);
        cell3.innerHTML = info.duration;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = info.reps;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='editNewExerciseButton(this)'>Edit</button> <button onClick = 'deleteExercise(this)'>Delete Exercise</button>`

}
// function to edit the information for that row (edit button) and pull the data into the fields to be edited
function editNewExerciseButton(td){
    selectedRow = td.parentElement.parentElement;
    dateOfExercise.value = selectedRow.cells[0].innerHTML;
    typeOfExercise.value = selectedRow.cells[1].innerHTML;
    duration.value = selectedRow.cells[2].innerHTML;
    reps.value = selectedRow.cells[3].innerHTML;
}
// function to pull the new data back down into the table
function updateExercise(showData) {
    selectedRow.cells[0].innerHTML = showData.dateOfExercise;
    selectedRow.cells[1].innerHTML = showData.typeOfExercise;
    selectedRow.cells[2].innerHTML = showData.duration;
    selectedRow.cells[3].innerHTML = showData.reps;
} 

function recallData(){
    dateOfExercise.value = '';
    typeOfExercise.value = '';
    duration.value = '';
    reps.value = '';
    selectedRow = null;
}
// function to delete the row of data from the table
function deleteExercise(td){
    if (confirm('Do you want to delete this exercise?')){
        row = td.parentElement.parentElement;
        document.getElementById("workout-list").deleteRow(row.rowIndex);
    recallData();
    }
}
