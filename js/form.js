// load users before creating new user
User.load(); // in some how you coming directly to the form page

console.log("users", users);

var createUser = function(event){
    event.preventDefault();
    var name = event.target.name.value;
    var age = Number(event.target.age.value);
    var weight = Number(event.target.weight.value);
    var height = Number(event.target.height.value);
    var gender= event.target.gender.value;
    var user = new User(name,age,weight,height,gender);
    advice(user);
    event.target.name.value = null;
    event.target.age.value= null;
    event.target.weight.value = null;
    event.target.height.value = null;
}
var advice = function(user){
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

submitData.addEventListener('submit',createUser);
