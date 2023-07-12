const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const country = document.getElementById("contry");
const state = document.getElementById("state");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const Dob = document.getElementById("DOB");
let flag = 1;

const valid1 = document.getElementById("valid1");
const valid2 = document.getElementById("valid2");
const valid3 = document.getElementById("valid3");
const valid4 = document.getElementById("valid4");
const valid5 = document.getElementById("valid5");
const valid6 = document.getElementById("valid6");
const valid7 = document.getElementById("valid7");
const valid8 = document.getElementById("valid8");

function validFunction() {
  if (fname.value == "") {
    valid1.style.color = "red";
  } else if (fname.value !== "") {
    valid1.style.color = "green";
  }

  if (lname.value == "") {
    valid2.style.color = "red";
  }else if(lname.value !== ""){
    valid2.style.color = "green"
  }

  if (country.value == "") {
    valid3.style.color = "red";
  } else if (country.value !== "") {
    valid3.style.color = "green";
  }

  if (state.value == "") {
    valid4.style.color = "red";
  } else if (state.value !== "") {
    valid4.style.color = "green";
  }
  
  if (Dob.value == "") {
    valid8.style.color = "red";
  } else if (Dob.value !== "") {
    valid8.style.color = "green";
  }

  if (email.value == "") {
    valid5.style.color = "red";
  } else if (email.value !== "") {
    valid5.style.color = "green";
  }

  if (mobile.value == "") {
    valid6.style.color = "red";
  } else if (mobile.value !== "") {
    valid6.style.color = "green";
  }

  if (password.value == "") {
    valid7.style.color = "red";
  } else if (password.value.length < 8) {
    valid7.innerText = "Password Must needed more then 8 charachters";
    valid7.style.color = "red";
  } else if (password.value !== "") {
    valid7.style.color = "green"
    valid7.innerText = "Password";
  }

  const cheackingFlag =
    fname.value !== "" &&
    lname.value !== "" &&
    country.value !== "" &&
    state.value !== "" &&
    email.value !== "" &&
    mobile.value !== "" &&
    password.value !== "" &&
    Dob.value !== ""
      ? (flag = 1)
      : (flag = 0);

  if (flag) {
    return true;
  } else {
    return false;
  }
}
