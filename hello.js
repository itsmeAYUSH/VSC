var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// headerTitle.style.borderBottom = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #000';
var item = document.getElementsByClassName('title');
item[0].style.fontWeight = 'bold';
item[0].style.color = 'green';
var list = document.getElementsByClassName('list-group-item');
// list[2].style.visibility = 'hidden';


document.querySelectorAll('.list-group-item')[1].style.backgroundColor = 'green';
var odd =  document.querySelectorAll('li:nth-child(odd)')
for(var i=0 ; i<odd.length ; i++){
    odd[i].style.backgroundColor = "grey";
}

