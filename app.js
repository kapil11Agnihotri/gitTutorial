<<<<<<< HEAD
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value

  var newItem = document.getElementById('item').value;
  var newDiscription=document.getElementById('description').value;

  // Create new li element

  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDiscription));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editbtn=document.createElement('button');
  // Add classes to del button

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.className="btn btn-sm float-right editbtn";
  // Append text node

  deleteBtn.appendChild(document.createTextNode('X'));
  editbtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);
  // Append li to list
  itemList.appendChild(li);
  
  

}

// Remove item

function removeItem(e){

  if(e.target.classList.contains('delete')){

    if(confirm('Are You Sure?')){

      var li = e.target.parentElement;

      itemList.removeChild(li);

    }

  }

}

// Filter Items

function filterItems(e){

  // convert text to lowercase

  var text = e.target.value.toLowerCase();

  // Get lis
  
  var items = itemList.getElementsByTagName('li');

  
 

  // Convert to an array

  Array.from(items).forEach(function(item){
    
    var itemName=item.firstChild.textContent;
    var discription=item.childNodes[1].textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1 ||discription.toLowerCase().indexOf(text) != -1 ){

      item.style.display ='block';
      
    }
     else {

      item.style.display = 'none';
    }
     
  });

}

=======


var item=document.getElementsByClassName('list-group-item');
console.log(item);
item[2].style.background='green'

item[0].style.fontWeight='bold';
item[0].style.color='green'; 

item[1].style.fontWeight='bold';
item[1].style.color='green'; 

item[2].style.fontWeight='bold';
item[2].style.color='black'; 

item[3].style.fontWeight='bold';
item[3].style.color='green'; 


>>>>>>> 51eae8dd80edd1616c15ffa14b6782c5f000fd5d
