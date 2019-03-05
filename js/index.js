// Get & Name Elements
const body = document.querySelector('body');
const container = document.querySelectorAll('.container')[1];
const headerContainer = document.querySelector('.main-navigation');
const navHeader = document.querySelector('.nav-container h1');
const links = document.querySelectorAll('nav a');
const introImg = document.querySelector('.intro img');
const destination = document.querySelectorAll('.destination');
const buttons = document.querySelectorAll('.btn');

// ===============Events================
// Document
container.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'underline';
});
document.addEventListener('dblclick', function (e) {
    e.target.style.textDecoration = 'none';
});
document.addEventListener('scroll', function () {
    body.style.backgroundColor = 'lightgrey';
});

// Body
body.addEventListener('dragleave', function (e) {
    alert('Don\'t do that.');
});

// Header
container.addEventListener('wheel', function () {
    headerContainer.style.background = 'grey';
});

// Links
links.forEach(curr => curr.addEventListener('mouseover', function (e) {
    TweenMax.to(curr, 2.5, {
        textShadow: 'black -2px 4px 5px', ease: Elastic.easeOut.config(1, 0.3)
    });
}));
links.forEach(curr => curr.addEventListener('mouseout', function () {
    TweenMax.to(curr, 2.5, {
        textShadow: 'none', ease: Elastic.easeOut.config(1, 0.3)
    });
}));

// Prevent Page Refresh
links.forEach(curr => curr.addEventListener('click', function (e) {
    e.preventDefault();
}));

// Nav h1
navHeader.addEventListener('mouseover', function () {
    navHeader.innerHTML = 'The Fun Bus';
});
navHeader.addEventListener('mouseout', function () {
    navHeader.innerHTML = 'Fun Bus';
});
navHeader.addEventListener('mousedown', function (e) {
    return e.target.removeEventListener('mouseout', function () {
        navHeader.innerHTML = 'Fun Bus';
    })
})

// First Image
introImg.addEventListener('load', function () {
    alert('First image is loaded!')
});

// Destination
destination.forEach(curr => curr.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'underline';
    e.stopPropagation();
}));

// Buttons
buttons.forEach(curr => curr.addEventListener('mouseup', function () {
    console.log(buttons);
}));
buttons.forEach(curr => curr.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'underline';
    e.stopPropagation();
}));