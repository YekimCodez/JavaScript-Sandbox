// DOM Manipulation 


// Query Selector returns the first element that matches the selector
const title = document.querySelector('#main-title');
title.style.color = 'red';


// QuerySelectorAll returns a NodeList(Array-like object) of all elements that match the selector
const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list__item');
listItems[0].style.color = 'blue';
