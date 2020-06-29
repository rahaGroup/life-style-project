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
    localStorage.setItem('users',JSON.stringify(users));
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
    var user = new User(name,age,weight,height,gender);
    advice(user);
}
var advscriptice = function(user){
    var result = document.getElementById('advice');
    var feedback = document.createElement('p');
    feedback.textContent = 'Hello '+user.name+', Your Body Mass Index is '+ user.healthStatus +
    ' . BMI is a useful measure of overweight and obesity.It is calculated from your height and weight. BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat.';
    var feedback2 = document.createElement('p');
    feedback2.id='feedback';
    feedback2.textContent= 'Your daily need of calories is : '+ user.neededCalories+' Calory.';
    result.appendChild(feedback);
    result.appendChild(feedback2);
}
console.log(users)
submitData.addEventListener('submit',createUser);
