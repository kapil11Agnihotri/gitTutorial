const myForm = document.querySelector('#myForm');
const amountInput=document.getElementById('amount')
const discriptionInput=document.getElementById('discription')
const catagoryInput=document.getElementById('catagory')
const expenceList=document.querySelector('.list')

//add event listner

myForm.addEventListener('submit',onSubmit);
expenceList.addEventListener('click',removeItem)
expenceList.addEventListener('click',editItem)

function editItem(e){
    if(e.target.classList.contains('edit')){

        const li=e.target.parentElement;

        expenceList.removeChild(li)
        localStorage.setItem('New Expence : '+discriptionInput.value) 
    }
}


function removeItem(e){
    if(e.target.classList.contains('delete')){

        const li=e.target.parentElement;

        expenceList.removeChild(li)
        localStorage.removeItem('New Expence : '+discriptionInput.value) 
    }
}


function onSubmit(e){
    e.preventDefault()
   const li=document.createElement('li');
   
   //add text nodes with input values 

   li.appendChild(document.createTextNode(`${amountInput.value} - ${catagoryInput.value} - ${discriptionInput.value}`));
  
   
   
   // add html
  
   li.innerHTML=`${amountInput.value} - ${catagoryInput.value} - ${discriptionInput.value}`
   //add buttons
   const editBtn=document.createElement('button')
   const deleteBtn=document.createElement('button')
   // add class to buttons
   editBtn.className='edit'
   deleteBtn.className='delete' 

  // append textnode
  editBtn.appendChild(document.createTextNode('Edit'))
  deleteBtn.appendChild(document.createTextNode('Delete'))
   //add buttons to li
   li.appendChild(editBtn)
   li.appendChild(deleteBtn)

    expenceList.appendChild(li);
// add to local storage
let myObj={

    amount:amountInput.value,
    discription:discriptionInput.value,
    catgory:catagoryInput.value

 }

 let myObj_serialized=JSON.stringify(myObj);



 localStorage.setItem('New Expence : '+discriptionInput.value,myObj_serialized);

 console.log(Object.keys(myObj));

 const keysArr=Object.keys(myObj);

 keysArr.forEach(key =>{

     console.log(myObj[key])

 });



}
