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
    User.save();
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

User.save = function() {
  localStorage.setItem('users',JSON.stringify(users));
}

User.load = function() {
  users = [];
  users = JSON.parse(localStorage.getItem('users')) || [];
}

User.reset = function() {
  users = [];
}
