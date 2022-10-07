const myForm = document.querySelector("#myForm");
const amountInput = document.getElementById("amount");
const discriptionInput = document.getElementById("discription");
const catagoryInput = document.getElementById("catagory");
const expenceList = document.querySelector(".expence");
const expenceId = document.querySelector(".expence");

//add event listner

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const li = document.createElement("li");

  //add text nodes with input values

  li.appendChild(
    document.createTextNode(
      `${amountInput.value} - ${catagoryInput.value} - ${discriptionInput.value}`
    )
  );

  // add html

  li.innerHTML = `${amountInput.value} - ${catagoryInput.value} - ${discriptionInput.value}`;
  //add buttons
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  // add class to buttons
  editBtn.className = "edit";
  deleteBtn.className = "delete";

  // append textnode
  editBtn.appendChild(document.createTextNode("Edit"));
  deleteBtn.appendChild(document.createTextNode("Delete"));
  //add buttons to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  expenceList.appendChild(li);
  // add to local storage
  let myObj = {
    amount: amountInput.value,
    discription: discriptionInput.value,
    catgory: catagoryInput.value,
  };

  console.log(Object.keys(myObj));

  const keysArr = Object.keys(myObj);

  keysArr.forEach((key) => {
    console.log(myObj[key]);
  });

  axios
    .post(
      "https://crudcrud.com/api/c0ab1c796ff446ab8010f3148e015ff8/expence",
      myObj
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/c0ab1c796ff446ab8010f3148e015ff8/expence")
    .then((responce) => {
      console.log(responce);

      for (let i = 0; i < responce.data.length; i++) {
        showNewExpence(responce.data[i]);
      }
    })
    .catch((error) => console.log(error));
});

function showNewExpence(expence) {
  const parentNode = document.getElementsByClassName("expence");
  const childHTML = `<li id="${expence._id}">${expence.amount}-${expence.catagory}-${expence.discription}
 <button onclick="editUser('${expence.amount}','${expence.catagory}','${expence.discription}','${expence._id}')">edit</button>
 <button onclick="deleteUser('${expence._id}')">delete</button>
 </li>`;

  parentNode.innerHTML += childHTML;
  console.log(expence)
}
function editUser(amount, discription, catagory, expenceId) {
  document.getElementById("amount").value = amount;
  document.getElementById("discription").value = discription;
  document.getElementById("catagory").value = catagory;

  deleteUser(expenceId);
}

function deleteUser(expenceId) {
  axios
    .delete(
      `https://crudcrud.com/api/c0ab1c796ff446ab8010f3148e015ff8/expence/${expenceId}`
    )
    .then((responce) => {
      removeExpence(expenceId);
    })
    .catch((error) => console.log(error));
}

function removeExpence(expenceId) {
  const parentNode = document.getElementsByClassName("expence");
  const childtobeDeleted = document.getElementById(expenceId);
  if (childtobeDeleted) {
    parentNode.removeChild(childtobeDeleted);
  }
}
