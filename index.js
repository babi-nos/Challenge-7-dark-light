const checkbox = document.querySelector(".checkbox");
const numberOfFollow = document.querySelectorAll(".number-of-follow");
const today = document.querySelectorAll(".today");
const boxes = document.querySelectorAll(".box"); 
const head = document.querySelector(".head"); 
const titleDashbord = document.querySelector(".dashboard"); 
const titleToday = document.querySelector(".title-today"); 
const totalF = document.querySelector(".total-followers"); 
const titlePageView = document.querySelectorAll(".title"); 
const nameOfReseaux = document.querySelectorAll(".name-reseaux"); 
let toggleTheme = 0;



checkbox.addEventListener('click', () => {

    if(toggleTheme === 0){
        document.body.style.backgroundColor = "#fff"
        head.style.backgroundColor = "#F5F7FF"
        titleDashbord.style.color = "#000"
        titleToday.style.color = "#5E6377"
        totalF.style.color = "#5E6377"
        
        nameOfReseaux.forEach(function(nameOfReseaux){
            nameOfReseaux.style.color = "#21242D"
        });
        titlePageView.forEach(function(titlePageView){
            titlePageView.style.color = "#21242D"
        });
        
        boxes.forEach(function(box) {
            box.style.backgroundColor = "#F0F2FA";
        });
        numberOfFollow.forEach(function(numb) {
            numb.style.color = "#000";
        });
        today.forEach(function(day) {
            day.style.backgroundColor = "#F0F2FA";
        });
        toggleTheme--

    }else{

        document.body.style.backgroundColor = "#1E202A"
        head.style.backgroundColor = "#1F212E"
        titleDashbord.style.color = "#fff"
        titleToday.style.color = "#fff"
        totalF.style.color = "#8B97C6"
        
        nameOfReseaux.forEach(function(nameOfReseaux){
            nameOfReseaux.style.color = "#8B97C6"
        });
        titlePageView.forEach(function(titlePageView){
            titlePageView.style.color = "#8B97C6"
        });
        
        boxes.forEach(function(box) {
            box.style.backgroundColor = "#252A41";
        });
        numberOfFollow.forEach(function(numb) {
            numb.style.color = "#fff";
        });
        today.forEach(function(day) {
            day.style.backgroundColor = "#252A41";
        });
        toggleTheme++
    }
});



// other methode for black/light (give class css)
// const checkbox = document.querySelector('.checkbox');
// const body = document.querySelector('body');

// checkbox.addEventListener('click', () => {
//   body.classList.toggle('dark-theme');
// });




