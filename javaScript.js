
/* --------------------------------------  PAGE ACTIVE ----------------------------------------------------------
----------------------------------------------------------------------------------------------------------------*/


const home      = document.getElementById('page-home');
const about     = document.getElementById('page-about');
const project  = document.getElementById('page-project');
const contact   = document.getElementById('page-contact');


home.onclick = function () {
    home.style.color = '#F47522';
    about.style.color = '#19345E';
    project.style.color = '#19345E';
    contact.style.color = '#F47522';
    contact.style.backgroundColor = '';

    homeSlide();
}

about.onclick = function () {
    about.style.color = '#F47522';
    home.style.color = '#19345E';
    project.style.color = '#19345E';
    contact.style.color = '#F47522';
    contact.style.backgroundColor = '';

    aboutSlide();
}

project.onclick = function () {
    project.style.color = '#F47522';
    home.style.color = '#19345E';
    about.style.color = '#19345E';
    contact.style.color = '#F47522';
    contact.style.backgroundColor = '';
}

contact.onclick = function () {
    contact.style.color = '#FFFF';
    contact.style.backgroundColor = '#F47522';
    home.style.color = '#19345E';
    about.style.color = '#19345E';
    project.style.color = '#19345E';
}


/* -----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------*/


/* ---------------------------------- HOME SLIDE ----------------------------------------------------------
----------------------------------------------------------------------------------------------------------*/

const homeSlide2 = document.getElementById('homeSlide2');
const homeSlide1 = document.getElementById('homeSlide1');

window.onload = function () { homeSlide() , aboutSlide() }

let idHome = null;
function homeSlide() {
  let homeBottom = 200;
  let homeLeft = 200;
  let homeOpacity = 0
  clearInterval(idHome);
  idHome = setInterval(homeFrame, 5);
  
  function homeFrame() {
    if (homeBottom == 0) {
      clearInterval(idHome);
    } else {
      homeBottom--; 
      homeLeft--; 
      homeOpacity++;
      
      homeSlide1.style.opacity = homeOpacity;
 	  homeSlide1.style.bottom = homeBottom  + 'px';
      
    homeSlide2.style.left = homeLeft + 'px';
    homeSlide2.style.opacity = homeOpacity;
    
    }
  }
}

/* -------------------------------- ABOUT SLIDE ----------------------------------------------------
----------------------------------------------------------------------------------------------------*/

const aboutSlide1 = document.getElementById('aboutSlide1');
const aboutSlide2 = document.getElementById('aboutSlide2');

let idAbout = null;
function aboutSlide() {
  let aboutBottom = 200;
  let aboutRight = 200;
  let aboutOpacity = 0
  clearInterval(idAbout);
  idAbout = setInterval(aboutFrame, 5);
  
  function aboutFrame() {
    if (aboutBottom == 0) {
      clearInterval(idAbout);
    } else {
      aboutBottom--; 
      aboutRight--; 
      aboutOpacity++;
      
      aboutSlide1.style.right = aboutRight + 'px';
      aboutSlide1.style.opacity = aboutOpacity;
      
      aboutSlide2.style.opacity = aboutOpacity;
 	  aboutSlide2.style.bottom = aboutBottom  + 'px';
      
      
    
    }
  }
}

/* ------------------------------ Send Alert  ------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------= */

if (location.hash == "#alert") {

     
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Thank you',
        text: "for contacting me",
        showConfirmButton: false,
        timer: 3000
      }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
   
      window.location = 'index.html';
    
  })
  
}

/* ------------------------------------------------------------------------------------------------------------*/



const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
const cardThree = document.getElementById('cardThree');
let cardImage = ['danil.jpg', 'kevin.jpg','lauren.jpg','marvin.jpg'];



/*--------------------- Set Interval Slide ------------------------------  */

 setInterval(()=>{ rightFunction(), myMove() }, 5000);
    
/*---------------------   FUNGSI SLIDE RIGHT  -----------------------------------  
-------------------------------------------------------------------------*/
rightArrow.onclick = function() {rightFunction() , myMove()};
leftArrow.onclick = function() {leftFunction(), myMove()};

let i = 0;
let j = 0;
let k = 0;

function rightFunction(){

        
    if (i === 0 && j === 0 && k === 0) {
        i = 2
        j = 3
        k = 0

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
        cardThree.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`;

           

    }else {


    if( i === 0 ){
        i = 3;

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
    }else {
        i--;

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
    }
    if( j === 0 ){
        j = 3;

        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
    }else{
        j--;

        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
    }
    if( k === 0 ){
        k = 3;

        cardThree.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`; 
    }else {  
    k--;

    cardThree.style.backgroundImage = `linear-gradient(
        180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`;  
    }

   
}
};


/* ---------------------------------------------------------------------------   */

/*---------------------   FUNGSI SLIDE LEFT  -----------------------------------  
-------------------------------------------------------------------------*/


function leftFunction(){


    if ( i === 0 && j === 0 && k === 0 ) {
        i = 0
        j = 1
        k = 2

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
        cardThree.style.backgroundImage = `linear-gradient(180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`;

           
    }else {
    if ( i === 3 ){
        i = 0

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
    }else {
        i++;

        cardOne.style.backgroundImage = `linear-gradient(
            180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[i]}")`;
    }   
    if ( j === 3 ) {
        j = 0

        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
    }else{
        j++;

        cardTwo.style.backgroundImage = `url("assets/${cardImage[j]}")`;
    }
    if ( k === 3 ) {
        k = 0

        cardThree.style.backgroundImage = `linear-gradient(180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`;
    }else{
        k++;

        cardThree.style.backgroundImage = `linear-gradient(180deg,rgb(0 0 0 / 77%),rgb(0 0 0 / 54%) 100%), url("assets/${cardImage[k]}")`;
    }

   
}
    
};


/* ---------------------------------------------------------------------------   */



/*------------------------------  Slide Projects ---------------------------------------------------*/

let id = null;
function myMove() {
  let elem = document.getElementById("cardTwo");    
  let move = 200;
  clearInterval(id);
  id = setInterval(frame, 1);
  
  function frame() {
    if (move == 400) {
      clearInterval(id);
    } else {
      move++; 

 	  elem.style.width = move  + 'px';
      elem.style.height = (move - 50) + 'px'; 
    }
  }
}

/* ----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------- --
------------------------------------------------------------------------------------------------------------- */












































