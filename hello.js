var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #000';
var item = document.getElementsByClassName('title');
item[0].style.fontWeight = 'bold';
item[0].style.color = 'green';
var list = document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor = 'green';
list[1].style.fontWeight = 'bold';

for(var i=0 ; i<list.length ; i++){
    list[i].style.backgroundColor = 'green';
    list[i].style.fontWeight = 'bold'
}

var i5 = document.getElementsByClassName('newlist');
i5.style.color = 'red'
var i5 = document.getElementsByTagName('li');
i5.style.color = 'red'

