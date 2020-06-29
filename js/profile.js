
const resetButton = document.getElementById("reset");

const resetExcercises = function(e) {
    Exercise.reset();
    // save to localStorage
    Exercise.save();
    // redner All
    Exercise.renderExercisesTable();
}

resetButton.addEventListener("click", resetExcercises);

Exercise.load();
if (exercises.length) { // if not exercises => reset them
  Exercise.renderExercisesTable();
} else {
  resetExcercises();
}

console.log(exercises);
