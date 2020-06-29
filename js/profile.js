
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(e) {
    Exercise.reset();
    // save to localStorage
    Exercise.save();
    // redner All
    Exercise.renderExercisesTable();
});


Exercise.load();
console.log(exercises);
Exercise.renderExercisesTable();
