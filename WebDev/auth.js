function validateForm() {
  let FirstName = document.forms["myForm"]["FirstName"].value;
  let LastName = document.forms["myForm"]["LastName"].value;
  let Password = document.forms["myForm"]["Password"].value;
  let Email = document.forms["myForm"]["Email"].value;
  let Phone = document.forms["myForm"]["phone"].value;
  if (((!/^[A-Za-z]+$/.test(FirstName)) || (!/^[A-Za-z]+$/.test(LastName)))) {
    alert("Name must have only characters");
    return false;
  }
  if (((FirstName.length + LastName.length) < 6)) {
    alert("Name must have more than 6 characters");
    return false;
  }
  if (((Password.length) < 6)) {
    alert("Password should not be less than 6 characters length");
    return false;
  }
  let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(Email)) {
    alert("Invalid email! Please use format: name@domain.com");
    return false;
  }
  if(Phone.length != 10){
    alert("Phone number should contain 10 digits only");
    return false;
  }
}