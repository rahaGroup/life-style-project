var exercises = [];
var Exercise = function(name,positioning,image,video){
    this.name = name;
    this.positioning= positioning;
    this.image=image;
    this.video=video;
    this.finished= false;
    exercises.push(this);

}
var names = ['Side Steps', 'Side Taps', 'One-Legged Stand', 'Adductors Strengthening'];
var positionings =['Stand with your feet together.','Stand with your feet together. Maintain your body weight in the middle of your body. ','Stand next to a wall or something that you can hold on to (just in case). Take off your shoes for better grip. Stand straight with your knees locked. ','Lie down on the ground, on one side. Bend your upper leg and place it in front. Straighten your lower leg. The lower leg will do all the work!'];
var images = ['https://contents.mediadecathlon.com/s815829/460x0/296pt296/591xcr591/Side%20Steps.gif','https://contents.mediadecathlon.com/s815809/460x0/296pt296/591xcr591/Side%20Taps.gif','https://contents.mediadecathlon.com/s815803/460x0/296pt296/592xcr592/One%20legged%20Stand.gif','https://contents.mediadecathlon.com/s815881/460x0/296pt296/592xcr591/Adductors.gif'];
var videos = ['https://www.youtube.com/embed/G96VH-jll1A','https://www.youtube.com/embed/UNuhcy1eGjc','https://www.youtube.com/embed/ZLxyh_PEstI','https://www.youtube.com/embed/dRIMu4GAtI0'];

var createExercise = function(){
    for (var i = 0; i < 5; i++) {
        new Exercise(names[i],positionings[i],images[i],videos[i]);       
    }
}
createExercise();
var render = function(){
    var table = document.getElementById('exe');
    console.log(table);
    for (let i = 0; i < names.length; i++) {
        var row = document.createElement('tr');
        var imageData = document.createElement('td');
        var image = document.createElement('img');
        image.src = images[i];
        imageData.appendChild(image);
        row.appendChild(imageData);
        var name = document.createElement('td');
        name.textContent = names[i];
        row.appendChild(name);
        var positioning = document.createElement('td');
        positioning.textContent = positionings[i];
        row.appendChild(positioning);
        var videoData = document.createElement('td');
        var video = document.createElement('iframe');
        video.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture');
        video.src = videos[i];
        video.setAttribute('SameSite','None');
        videoData.appendChild(video);
        row.appendChild(videoData);  
        table.appendChild(row); 
    } 
}
render();