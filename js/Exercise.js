var table = document.getElementById('exe');

var exercises = [];

var Exercise = function(name, positioning, image, video){
    this.name = name;
    this.positioning= positioning;
    this.image=image;
    this.video=video;
    this.index = exercises.push(this) - 1; // index used as helper in deletion process
}

Exercise.prototype.delete = function (event){
  const td = event.target;
  const index = ['data-index'];
  exercises.splice(index, 1);
  Exercise.save();
  const row = td.parentNode;
  row.parentNode.removeChild(row);
}

Exercise.prototype.render = function () {

  var row = document.createElement('tr');
  var imageData = document.createElement('td');
  var image = document.createElement('img');
  image.src = this.image;
  imageData.appendChild(image);
  row.appendChild(imageData);
  var name = document.createElement('td');
  name.textContent = this.name;
  row.appendChild(name);
  var positioning = document.createElement('td');
  positioning.textContent = this.positioning;
  row.appendChild(positioning);
  var videoData = document.createElement('td');
  var video = document.createElement('iframe');
  video.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture');
  video.src = this.video;
  video.setAttribute('SameSite','None');
  videoData.appendChild(video);
  var tdDelete = document.createElement('td');
  tdDelete['data-index'] = this.index;
  tdDelete.textContent = '✔';
  tdDelete.id='delete';
  tdDelete.addEventListener("click", this.delete);
  row.appendChild(videoData);
  row.appendChild(tdDelete);
  table.appendChild(row);
}

Exercise.renderExercisesTable = function () {
  table.innerHTML = "";
  const trHeader = document.createElement("tr");

  // table heads
  const thImage = document.createElement("th");
  thImage.innerText = "IMAGE";
  trHeader.appendChild(thImage);
  const thName = document.createElement("th");
  thName.innerText = "NAME";
  trHeader.appendChild(thName);
  const thPositioning = document.createElement("th");
  thPositioning.innerText = "POSITIONING";
  trHeader.appendChild(thPositioning);
  const thVideo = document.createElement("th");
  thVideo.innerText = "VIDEO";
  trHeader.appendChild(thVideo);

  const thFinished = document.createElement("th");
  thFinished.innerText = "Finished";
  trHeader.appendChild(thFinished);

  table.appendChild(trHeader);
  for (var i = 0; i < exercises.length; i++) {
    const exc = exercises[i];
    exc.render();
  }
}

Exercise.save = function () {
  localStorage.setItem('exercises',JSON.stringify(exercises));
}

Exercise.load = function () {
  exercises = [];
  const exercisesArray = JSON.parse(localStorage.getItem('exercises')) || [];
  for (var i = 0; i < exercisesArray.length; i++) {
    const { name, positioning, image, video } = exercisesArray[i];
    new Exercise(name, positioning, image, video);
  }
}

Exercise.reset = function (){
  exercises = [];
  new Exercise("Side Steps", "Stand with your feet together.", "https://contents.mediadecathlon.com/s815829/460x0/296pt296/591xcr591/Side%20Steps.gif", "https://www.youtube.com/embed/G96VH-jll1A','https://www.youtube.com/embed/UNuhcy1eGjc", "https://www.youtube.com/embed/UNuhcy1eGjc");
  new Exercise("Side Taps", "Stand with your feet together. Maintain your body weight in the middle of your body. ", "https://contents.mediadecathlon.com/s815809/460x0/296pt296/591xcr591/Side%20Taps.gif", "https://www.youtube.com/embed/ZLxyh_PEstI");
  new Exercise("One-Legged Stand", "Stand next to a wall or something that you can hold on to (just in case). Take off your shoes for better grip. Stand straight with your knees locked. ", 'https://contents.mediadecathlon.com/s815803/460x0/296pt296/592xcr592/One%20legged%20Stand.gif', 'https://www.youtube.com/embed/ZLxyh_PEstI');
  new Exercise("Adductors Strengthening", "'Lie down on the ground, on one side. Bend your upper leg and place it in front. Straighten your lower leg. The lower leg will do all the work!", "https://contents.mediadecathlon.com/s815881/460x0/296pt296/592xcr591/Adductors.gif", "https://www.youtube.com/embed/dRIMu4GAtI0");
}
