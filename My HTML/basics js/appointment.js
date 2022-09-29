const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const itemList=document.getElementById('users');


itemList.addEventListener('click',removeItem);
itemList.addEventListener('click',editUserDetails);

// Listen for form submit
myForm.addEventListener('submit', onSubmit);





function removeItem(e){
    if(e.target.classList.contains('delete')){
        const li=e.target.parentElement;
        itemList.removeChild(li);
        
    }
}


function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    var editbtn=document.createElement('button');
    var deleteBtn = document.createElement('button');

    
  
    // Add classes to del button
  
    editbtn.className="edit";
  
    deleteBtn.className = 'delete';
  
   
  
    // Append text node
  
    editbtn.appendChild(document.createTextNode('Edit'));
  
    deleteBtn.appendChild(document.createTextNode('Delete'));
  
    
  
    // Append button to li
  
    
    li.appendChild(editbtn);
    li.appendChild(deleteBtn);
  
    // Append li to list
  
   itemList.appendChild(li);

    // Append to ul
    

    let myObj={
       name:nameInput.value,
       email:emailInput.value,

    }
    let myObj_serialized=JSON.stringify(myObj);
    const myKey=(nameInput.value +'  :  '+emailInput.value);

    localStorage.setItem(myKey,myObj_serialized);
    console.log(Object.keys(myObj));
    const keysArr=Object.keys(myObj);
    keysArr.forEach(key =>{
        console.log(myObj[key])
    });
    
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
function editUserDetails(name,email){
 document.getElementById('name').value=name;
 document.getElementById('email').value=email;
}
