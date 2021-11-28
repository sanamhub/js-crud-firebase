// firebase import and configuration
// 1. goto https://firebase.google.com/
// 2. goto project settings
// 3. goto web app
// 4. copy code under cdn radio button

// paste here (firebase import and configuration)

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

const db = getDatabase();

// references
let name = document.getElementById("name");
let rollNo = document.getElementById("roll-no");
let section = document.getElementById("section");
let gender = document.getElementById("gender");

let createCRUD = document.getElementById("createCRUD");
let readCRUD = document.getElementById("readCRUD");
let updateCRUD = document.getElementById("updateCRUD");
let deleteCRUD = document.getElementById("wdeleteCRUD");

// insert data function
function InsertData() {
  set(ref(db, "TheStudents/" + rollNo.value), {
    nameVal: name.value,
    rollNoVal: rollNo.value,
    sectionVal: section.value,
    genderVal: gender.value,
  })
    .then(() => {
      alert("Data stored successfully!");
    })
    .cath((error) => {
      alert(`Unsuccessful, error ${error}`);
    });
}

// assign event to buttons
createCRUD.addEventListener("click", InsertData);
