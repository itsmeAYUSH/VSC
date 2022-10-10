// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // headerTitle.style.borderBottom = 'solid 4px #000';
// header.style.borderBottom = 'solid 4px #000';
// var item = document.getElementsByClassName('title');
// item[0].style.fontWeight = 'bold';
// item[0].style.color = 'green';
// var list = document.getElementsByClassName('list-group-item');
// // list[2].style.visibility = 'hidden';


// document.querySelectorAll('.list-group-item')[1].style.backgroundColor = 'green';
// var odd =  document.querySelectorAll('li:nth-child(odd)')
// for(var i=0 ; i<odd.length ; i++){
//     odd[i].style.backgroundColor = "grey";
// }


// parentNode and parentElement
var itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = "grey";
//lastchildNodes
itemList.lastElementChild.textContent = "list 4";

//lastChild
itemList.lastChild.textContent = "hello"

//nextSibling
itemList.nextSibling.textContent = "goodbye"

//previousSibling
itemList.previousElementSibling.style.color = 'green';

//createElement
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = "hello1";
newDiv.setAttribute('title','hello div');
var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);
console.log(newDiv)
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);


