// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hollo world !!!' ;

// let myVariable ;
// myVariable = 'Bob'

// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

var myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/picture_gril.jpg') {
        myImage.setAttribute('src', 'images/picture_gril2.jpg');
    } else {
        myImage.setAttribute('src', 'images/picture_gril.jpg')
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
      }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
//   function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName || myName === null) {
//       setUserName();
//     } else {
//       localStorage.setItem('name', myName);
//       myHeading.innerHTML = 'Mozilla is cool, ' + myName;
//     }
//}