function validateForm() {
  let x = document.forms["myForm"]["FirstName"].value;
  let y = document.forms["myForm"]["LastName"].value;
  let z = document.forms["myForm"]["Password"].value;
  if (((!/^[A-Za-z]+$/.test(x)) || (!/^[A-Za-z]+$/.test(y)))) {
    alert("Name must have only characters");
    return false;
  }
  if (((x.length + y.length) < 6)) {
    alert("Name must have more than 6 characters");
    return false;
  }
  if (((z.length) < 6)) {
    alert("Password should not be less than 6 characters length");
    return false;
  }
}