var users=[];
function User(name,age,weight,height,gender){
    this.name=name;
    this.age=age;
    this.weight=weight;
    this.height=height;
    this.gender=gender;
    this.healthStatus = this.getHealthStatus();
    this.neededCalories = this.NoOfCalries();
    users.push(this);
}
User.prototype.getHealthStatus = function(){
    var bmi = this.weight / ((this.height/100)^2); //calculate Body Mass Index
    if(bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
} 
User.prototype.NoOfCalries = function(){
    if(this.gender === 'male'){
       return 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else {
        return 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    }   
}
var createUser = function(event){
    event.preventDefault();
    var name = event.target.name.value;
    var age = Number(event.target.age.value);
    var weight = Number(event.target.weight.value);
    var height = Number(event.target.height.value);
    var gender= event.target.gender.value;
    new User(name,age,weight,height,gender);

}
// var advice = function(){
//     var hh = document.getElementById('advice')
//     var test = document.createElement('p');
//     test.textContent = this.neededCalories;
//     hh.appendChild(test);
// }
console.log(users)
submitData.addEventListener('submit',createUser);
